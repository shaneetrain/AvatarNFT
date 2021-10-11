import React from "react";
import Head from "next/head";

const Vision = () => {
    return (
        <div className="bg-white h-screen w-screen">
            <Head>
                <title>Avatar</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
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
            <div className="mt-20">Vision Baby!</div>
        </div>
    );
};

export default Vision;
