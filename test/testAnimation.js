import Head from "next/head";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Home() {
    const { scrollY, scrollYProgress } = useViewportScroll();

    const [image, setImage] = useState(null);
    const [frameIndex, setFrameIndex] = useState(0);
    const canvas = useRef(null);
    const frameCount = 37;
    const currentFrame = (index) =>
        `/images/testAssets-website/Hero_asset_test${index
            .toString()
            .padStart(2, "0")}.webp`;

    const opacityHero = useTransform(scrollY, [400, 700], [1, 0]);
    const opacitySecondary = useTransform(scrollY, [700, 1000], [0, 1]);
    const xSecondary = useTransform(scrollY, [700, 1000], [-150, -50]);

    useEffect(() => {
        preloadImages();

        const img = new Image();
        img.src = currentFrame(frameIndex);
        img.onload = () => setImage(img);
    }, []);

    useEffect(() => {
        if (image && canvas) {
            const context = canvas.current.getContext("2d");
            context.drawImage(image, 0, 0);
        }
    }, [image, canvas]);

    useEffect(() => {
        const img = new Image();
        setFrameIndex(
            Math.min(
                frameCount - 1,
                Math.floor(scrollYProgress.current * frameCount)
            )
        );
        console.log(frameIndex);
        img.src = currentFrame(frameIndex);
        img.onload = () => setImage(img); // this line causes an infinite loop and slows down the pages
    }),
        [scrollYProgress.curent];

    const preloadImages = () => {
        for (let i = 1; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
        }
    };

    return (
        <div>
            <div style={{ height: 2400 }} className="bg-white">
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
                        crossorigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <div className="sticky top-0">
                    <canvas
                        width={1920}
                        height={1080}
                        className="w-screen"
                        ref={canvas}
                    />
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
