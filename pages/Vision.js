import React from "react";
import Head from "next/head";
import Dropdown from "../components/Dropdown";

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
            <div className="mt-24">
                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col items-center">
                        <h2 className="text-3xl font-bold">
                            Bring your avatar to life.
                        </h2>
                        <ul class=" steps py-8 w-200">
                            <li class="step step-primary">The Miniverse</li>
                            <li class="step">3D Printing</li>
                            <li class="step">Holographic Tech</li>
                            <li class="step">Avatars</li>
                        </ul>
                        <Dropdown
                            title="The Miniverse"
                            body="We want to create and forever expand upon a social game that is only available to holders of our Avatars. This open world miniverse will be filled with minigames and leaderboards where winners are airdropped prizes and sent 3d prints of their Avatar. We generally would like to start with a small social game and build upon that under the guidance of our holders. We first and foremost want to create a game that holders love to use."
                        />

                        <Dropdown
                            title="3D Printing"
                            body="We want to bring these avatars into your home as well. We will be working with a specialist team of 3d printers to make your avatar available if you so choose. We will be sending 3d prints to winners of minigames."
                        />
                        <Dropdown
                            title="Holographic Tech"
                            body="We want to explore holographic display tech. We want to make these available to you as well if you would like. We will also be sending these to winners of minigames in our miniverse."
                        />
                        <Dropdown
                            title="Inter-Dimensional Avatars"
                            body="We will make sure your Avatar is always useful. We will always be updating their underlying components to be compatible with metaverse standards (read more about this in the next section). We truly aim to be the first inter-dimensional avatars. Meaning they can be used in many different games and eventually all future metaverses."
                        />

                        <div className="flex flex-col items-center pb-6">
                            <h2 className="text-3xl font-bold pt-24">
                                Make the metaverse real.
                            </h2>
                        </div>
                        <ul class=" steps py-6 w-200">
                            <li class="step step-primary">Standards</li>
                            <li class="step">Metaverse Base</li>
                        </ul>
                        <div className="flex flex-col items-center">
                            <Dropdown
                                title="Inter-Dimensional Standards"
                                body="We want to work with game studios to create a universal standard for video game assets - starting with avatars. We want to create a standard that works for all studios and allows games to accept any avatars that follow this standard. This is one of the most fundamental pieces to the puzzle of the metaverse. In order for everything to be seamless across worlds, we have to have all assets be standardized in a way where they will work with any game. Currently this is not a reality. We aim to change this. And while we are waiting for a fully functional metaverse, we want to make our avatars available in AAA games. We can't promise this because it isn't solely in our control but we will do everything we can to make this happen."
                            />
                            <Dropdown
                                title="Metaverse Baselayer"
                                body="The largest long-term goal we have is to bring the actual metaverse to life. Our vision is to fund and help build a decentralized base layer to the metaverse. Similar to how Ethereum is a decentralized base layer to a lot of apps. We want to help facilitate the creation of a decentralized base layer to the metaverse. Game studios (centralized) and DAOs (decentralized) can then build on top of that. They can provide other universes and experiences that are all linked to the base layer by market and asset standards. They can charge a fee for you to have access to their world. This could open up all new business models to game creators. Instead of having to release a game every year, you could charge a monthly fee to have access to your part of the metaverse and continually build upon what you currently have. Always making it better and better. You can just walk through a portal and now you are playing GTA with your same avatar and items. If I am being honest, we don't quite yet know how to go about creating this. But we have the desire. And we can use this project to fund it."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;
