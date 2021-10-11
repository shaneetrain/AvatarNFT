import Head from "next/head";
import GetNFTs from "../components/GetNFTs";
import {
    motion,
    useMotionValue,
    useTransform,
    useViewportScroll,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
    const [Frame, setFrame] = useState("00");
    const { scrollY } = useViewportScroll();

    const opacityHero = useTransform(scrollY, [400, 700], [1, 0]);
    const opacitySecondary = useTransform(scrollY, [700, 1000], [0, 1]);
    const xSecondary = useTransform(scrollY, [700, 1000], [-150, -50]);

    useEffect(() => {
        return scrollY.onChange((v) => {
            let frame = parseInt(scrollY.current * 0.1).toString();
            if (frame.length === 1) {
                frame = "0" + frame;
            }
            if (frame > 37) {
                frame = 37;
            }
            setFrame(frame);
        });
    }, [scrollY]);

    return (
        <div>
            <div style={{ height: 2400 }} className="bg-white">
                <Head>
                    <title>Rock N Roll</title>
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
                    <motion.img
                        src={`/images/testAssets-website/Hero_asset_test${Frame}.jpg`}
                        alt=""
                        style={{ opacity: opacityHero }}
                        className={`w-screen h-full z-10 ${
                            opacityHero === 0 ? "hidden" : null
                        }`}
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
