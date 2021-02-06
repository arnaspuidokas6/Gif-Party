import React, { FC } from 'react';
import '../../tailwind.output.css';

export const Card: FC = () => (
    <div>
        <div className="rounded-lg overflow-hidden">
            <div className="relative overflow-hidden pb-60">
                <img
                    className="absolute h-full w-full object-cover object-center"
                    src="https://collect.criggzdesign.com/wp-content/uploads/2020/07/5c77d8a62417e4405611bb42_3k-color-1-scaled.jpg"
                    alt=""
                />
            </div>
            <div className="relative bg-shadowBlue">
                <div className="py-10 px-8">
                    <h3 className="text-2xl font-bold text-teaGreen">Notepad</h3>
                    <div className="mt-10 flex justify-between items-center">
                        <div>
                            <img
                                src="https://collect.criggzdesign.com/wp-content/uploads/2020/07/Ps.svg"
                                alt=""
                                className="w-6"
                            />
                        </div>
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
