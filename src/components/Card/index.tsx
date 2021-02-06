/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { IGifResponse } from '../../api/types';
import '../../tailwind.output.css';

export const Card: FC<IGifResponse> = ({ imageUrl, title, userImage, displayName }) => (
    <div>
        <div className="rounded-lg overflow-hidden">
            <div className="relative overflow-hidden pb-60">
                <img
                    className="absolute h-full w-full object-cover object-center"
                    src={imageUrl}
                    alt={title ?? 'No title'}
                />
            </div>
            <div className="relative bg-shadowBlue">
                <div className="py-10 px-8">
                    <h3 className="text-2xl font-bold text-teaGreen">{title ?? 'No title'}</h3>
                    <div className="mt-10 flex justify-between items-center">
                        {userImage ? (
                            <>
                                <img src={userImage} alt={displayName} className="w-12 rounded-xl" />
                            </>
                        ) : (
                            <></>
                        )}
                        <a
                            href="https://collect.criggzdesign.com/index.php/resources/mockups/notepad/"
                            className="flex items-center text-cambridgeBlue"
                        >
                            <p className="mr-4">Read more</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
