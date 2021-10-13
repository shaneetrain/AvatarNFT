import Head from "next/head";
import {
    motion,
    useMotionValue,
    useTransform,
    useViewportScroll,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Home() {
    const { scrollY } = useViewportScroll();

    const [image, setImage] = useState(null);
    const canvas = useRef(null);

    const opacityHero = useTransform(scrollY, [400, 700], [1, 0]);
    const opacitySecondary = useTransform(scrollY, [700, 1000], [0, 1]);
    const xSecondary = useTransform(scrollY, [700, 1000], [-150, -50]);

    useEffect(() => {
        const img = new Image();
        img.src = currentFrame("00");
        img.onload = () => setImage(img);
    }, []);

    useEffect(() => {
        if (image && canvas) {
            const context = canvas.current.getContext("2d");
            context.drawImage(image, 0, 0);
        }
    }, [image, canvas]);

    useEffect(() => {
        let frame = parseInt(scrollY.current * 0.1).toString();
        frame.length === 1 ? (frame = frame + "0") : null;
        const img = new Image();
        console.log(frame);
        img.src = currentFrame(frame);
        img.onload = () => setImage(img);
    }, [scrollY]);

    const currentFrame = (index) =>
        `/images/testAssets-website/Hero_asset_test${index}.webp`;

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
                    {/* <motion.img
                        src={`/images/testAssets-website/Hero_asset_test${Frame}.webp`}
                        alt=""
                        ref={refImage}
                        style={{ opacity: opacityHero }}
                        className={`w-screen h-full z-10 ${
                            opacityHero === 0 ? "hidden" : null
                        }`}
                    /> */}
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
