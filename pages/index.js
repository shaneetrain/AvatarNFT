import Head from "next/head";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Home() {
    const { scrollY } = useViewportScroll();

    const [frameIndex, setFrameIndex] = useState(0);
    const canvas = useRef(null);
    const frameCount = 90;
    const currentFrame = (index) =>
        `/images/renders/test${index.toString().padStart(4, "0")}.png`;

    const opacityHero = useTransform(scrollY, [1400, 1800], [1, 0]);
    const opacitySecondary = useTransform(scrollY, [1600, 2000], [0, 1]);
    const xSecondary = useTransform(scrollY, [1650, 2050], [-150, -50]);

    useEffect(() => {
        preloadImages();

        // We'll add an event listener to the window to know when the user has scrolled
        // and we'll update the scroll position state (in a separate function)
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                calculateScrollDistance();
            });
        });

        // Draw the first image on page load
        drawImage(frameIndex);
        // Remove the event listener when the component is unmounted to prevent memory leaks
        return () => window.removeEventListener("scroll");
    }, []);

    //
    useEffect(() => {
        drawImage(frameIndex);
    }, [frameIndex]);

    // Preload all the images so they are downloaded and cached
    const preloadImages = () => {
        for (let i = 1; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
        }
    };

    // This is a helper function to calculate the height of the document, we'll need to use this to calculate the scroll distance
    const getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
    };

    // This function calculates the scroll progress and the corresponding frame index for that scroll position
    const calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = getDocHeight();

        const totalDocScrollLength = docHeight - windowHeight;
        const scrollFraction = Math.floor(
            (scrollTop / totalDocScrollLength) * 2 * frameCount
        );
        setFrameIndex(Math.min(frameCount - 1, scrollFraction));
    };

    // This function draws the image on the canvas
    const drawImage = (frameIndex) => {
        const img = new Image();
        img.src = currentFrame(frameIndex);
        if (canvas) {
            const context = canvas.current.getContext("2d");
            img.onload = () => {
                context.drawImage(img, 0, 0);
            };
        }
    };

    return (
        <div>
            <div style={{ height: 3600 }} className="bg-white">
                <Head>
                    <title>Avatar</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <div className="sticky top-0">
                    <motion.div
                        style={{
                            opacity: opacityHero,
                        }}
                    >
                        <canvas
                            width={1920 / 1.5}
                            height={1280 / 1.5}
                            className="w-screen"
                            ref={canvas}
                        />
                    </motion.div>
                    <motion.div
                        style={{
                            opacity: opacitySecondary,
                            x: xSecondary,
                        }}
                        className="text-primary z-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        Yes, we move.
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
