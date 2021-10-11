import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useQuery } from "react-query";
import { getAddress } from "../api/ethereum";
import Link from "next/link";

const Navbar = () => {
    const { route } = useRouter();

    const { data: address, refetch } = useQuery("key", getAddress, {
        refetchOnWindowFocus: false,
        enabled: false, // turned off by default, manual refetch is needed
        retry: false,
    });

    const handleClick = () => {
        refetch();
    };

    useEffect(refetch, []);

    return (
        <div className="flex justify-center">
            <div className="glass fixed z-50 px-2 rounded-xl top-1 h-12 flex items-center justify-center">
                <div className="flex flex-row justify-center items-center">
                    <Link href="/">
                        <a
                            className={`text-lg px-3 cursor-pointer 
                        ${
                            route === "/"
                                ? "font-bold text-primary"
                                : "text-gray-900 hover:text-primary hover:border-b border-primary"
                        }
                        `}
                        >
                            Home
                        </a>
                    </Link>
                    <Link href="/Team">
                        <a
                            className={`text-lg px-3 cursor-pointer 
                        ${
                            route === "/Team"
                                ? "font-bold text-primary"
                                : "text-gray-900 hover:text-primary hover:border-b border-primary"
                        }
                        `}
                        >
                            Team
                        </a>
                    </Link>
                    <Link href="/Vision">
                        <a
                            className={`text-lg px-3 cursor-pointer 
                        ${
                            route === "/Vision"
                                ? "font-bold text-primary"
                                : "text-gray-900 hover:text-primary hover:border-b border-primary"
                        }
                        `}
                        >
                            Vision
                        </a>
                    </Link>
                    {address ? (
                        <Link href="/nfts">
                            <a
                                className={`text-lg px-3 cursor-pointer 
                        ${
                            route === "/nfts"
                                ? "font-bold text-primary"
                                : "text-gray-900 hover:text-primary hover:border-b border-primary"
                        }
                        `}
                            >
                                NFTs
                            </a>
                        </Link>
                    ) : null}
                    <button
                        onClick={handleClick}
                        className="bg-primary rounded-md ml-3 btn btn-sm text-md"
                    >
                        {address ? address.substr(0, 7) + ".." : "Connect"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
