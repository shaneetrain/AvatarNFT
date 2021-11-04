import Head from "next/head";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Home() {
    const { scrollY } = useViewportScroll();

    const [frameIndex, setFrameIndex] = useState(0);
    const canvas = useRef(null);
    const frameCount = 90;
    const currentFrame = (index) =>
        `/images/heroHD/Hero_${index.toString().padStart(5, "0")}.jpg`;

    const opacityHero = useTransform(scrollY, [1400, 1800], [1, 0]);
    const opacitySecondary = useTransform(
        scrollY,
        [1600, 2000, 2900, 3100],
        [0, 1, 1, 0]
    );
    const opacityText = useTransform(
        scrollY,
        [2200, 2500, 2800, 3000],
        [0, 1, 1, 0]
    );
    const opacityGeos = useTransform(
        scrollY,
        [3000, 3600, 3800, 4400],
        [0, 1, 1, 0]
    );

    const xSecondary = useTransform(scrollY, [1650, 2050], [-350, -200]);
    const xText = useTransform(scrollY, [2200, 2500], [-50, -200]);

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
            <div style={{ height: 4800 }} className="bg-white">
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
                        className="flex justify-center items-center bg-greyHero"
                        style={{
                            opacity: opacityHero,
                        }}
                    >
                        <div className="flex justify-center items-center">
                            <canvas
                                width={1920}
                                height={1080}
                                className="h-screen"
                                ref={canvas}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        style={{
                            opacity: opacitySecondary,
                            x: xSecondary,
                            y: -25,
                        }}
                        className="text-primary text-3xl z-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        Say Hello.
                    </motion.div>
                    <motion.div
                        style={{
                            opacity: opacityText,
                            x: xText,
                            y: 25,
                        }}
                        className="text-primary text-3xl z-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        To your new avatar.
                    </motion.div>
                    <motion.div
                        style={{
                            opacity: opacityGeos,
                        }}
                        className="text-primary text-6xl z-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        GEOS
                    </motion.div>
                </div>
            </div>
            <div className="w-screen py-12 flex flex-row justify-center items-center flex-wrap bg-gradient-to-t from-primary">
                <div className="bg-greyHero w-72 h-72 m-2 rounded-2xl"></div>
                <div className="bg-greyHero w-72 h-72 m-2 rounded-2xl"></div>
                <div className="bg-greyHero w-72 h-72 m-2 rounded-2xl"></div>
                <div className="bg-greyHero w-72 h-72 m-2 rounded-2xl"></div>
                <div className="bg-greyHero w-72 h-72 m-2 rounded-2xl"></div>
                <div className="bg-greyHero w-72 h-72 m-2 rounded-2xl"></div>
                <div className="bg-greyHero w-72 h-72 m-2 rounded-2xl"></div>
                <div className="bg-greyHero w-72 h-72 m-2 rounded-2xl"></div>
                <div className="bg-greyHero w-72 h-72 m-2 rounded-2xl"></div>
                <div className="bg-greyHero w-72 h-72 m-2 rounded-2xl"></div>
                <div className="bg-greyHero w-72 h-72 m-2 rounded-2xl"></div>
                <div className="bg-greyHero w-72 h-72 m-2 rounded-2xl"></div>
            </div>
            <div className="py-64  bg-primary">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white text-4xl font-bold">
                        Built for the metaverse.
                    </p>
                    <div className="my-2"></div>
                    <div className="w-200 h-120 bg-greyHero"></div>
                </div>
            </div>
        </div>
    );
}
