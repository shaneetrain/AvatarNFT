import React from "react";

const TeamCard = ({ name, desc, socials, img }) => {
    return (
        <div>
            <div className="flex items-center w-148 px-4 py-2 bg-cover card">
                <div className="card glass lg:card-side text-neutral-content">
                    <figure className="p-6">
                        <img
                            src={`${img}`}
                            className="shadow-lg mask mask-squircle"
                        />
                    </figure>
                    <div className="max-w-md card-body">
                        <h2 className="card-title text-primary">{name}</h2>
                        <p className="text-gray-900">{desc}</p>
                        <div className="card-actions">
                            {socials.instagram ? (
                                <a
                                    href={`${socials.instagram}`}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img
                                        src="/instagram-logo.png"
                                        className="w-5 h-5 mx-1"
                                    />
                                </a>
                            ) : null}
                            {socials.twitter ? (
                                <a
                                    href={`${socials.twitter}`}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img
                                        src="/twitter-logo.png"
                                        className="w-5 h-5 mx-1"
                                    />
                                </a>
                            ) : null}
                            {socials.behance ? (
                                <a
                                    href={`${socials.behance}`}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img
                                        src="/behance-logo.png"
                                        className="w-5 h-5 mx-1"
                                    />
                                </a>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
