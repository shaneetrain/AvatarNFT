import React from "react";
import Head from "next/head";
import TeamCard from "../components/TeamCard";

const team = [
    {
        name: "Shane Hanlon",
        desc: "3d Artist and Developer. Shane has worked with brands like Apple, Playstation, and Beats by Dre.",
        img: "https://picsum.photos/id/19/200",
        socials: {
            instagram: "https://www.instagram.com/wonderingshane/",
            twitter: "https://twitter.com/WonderingShane",
            behance: "https://www.behance.net/ShaneHanlon",
        },
    },
    {
        name: "Rhea Manglapus",
        desc: "Art Director and Designer. Rhea has worked as a designer for Apple the past 3 years.",
        img: "https://picsum.photos/id/50/200",
        socials: {
            instagram: "https://www.instagram.com/rhea_lm/",
            twitter: "https://twitter.com/rhea_lm",
            behance: "https://www.behance.net/RheaLM",
        },
    },
    {
        name: "Christopher Rutledge",
        desc: "3d Artist and Technical Director.",
        img: "https://picsum.photos/id/18/200",
        socials: {
            instagram: "https://www.instagram.com/tokymegz/",
            twitter: "https://twitter.com/tokyomegaplex",
        },
    },
    {
        name: "Seb Helene ",
        desc: "3d Artist and Art Director.",
        img: "https://picsum.photos/id/99/200",
        socials: {
            instagram: "https://www.instagram.com/seb_scribbles/",
            twitter: "https://twitter.com/SebastianHelene",
            behance: "https://www.behance.net/sebastianhelene",
        },
    },
];

const Team = () => {
    return (
        <div className="bg-white h-screen w-screen mt-16">
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
            <div className="flex flex-col items-center w-screen">
                {team.map((mem) => {
                    return (
                        <TeamCard
                            img={mem.img}
                            name={mem.name}
                            socials={mem.socials}
                            desc={mem.desc}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Team;
