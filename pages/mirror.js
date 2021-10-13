import React, { useState } from "react";
import Head from "next/head";
import Card from "../components/Card";
import { getRobotos, getRobotosPicture, getRobotosData } from "../api/ethereum";
import { useQuery } from "react-query";

const YourNFTs = () => {
    const { data: robotos, isLoading } = useQuery("robotos", getRobotos);

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
            <div className="mt-24 flex justify-center items-center flex-col">
                <div className="w-1/4 flex flex-col justify-center items-center">
                    <p className="text-primary text-6xl font-bold">OOPS...</p>
                    <div className="py-4"></div>
                    <p className="text-primary">
                        it doesn't look like you have any Avatars, so here are
                        all of the robotos that you own!
                    </p>
                </div>
                <div className="flex justify-center flex-wrap pt-4">
                    {isLoading
                        ? null
                        : robotos.map((r) => {
                              return (
                                  <Card
                                      img={r.image}
                                      desc={r.description}
                                      name={r.name}
                                  />
                              );
                          })}
                </div>
            </div>
        </div>
    );
};

export default YourNFTs;
