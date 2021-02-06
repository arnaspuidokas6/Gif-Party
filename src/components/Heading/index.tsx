import React, { FC } from 'react';
import '../../tailwind.output.css';

export const Heading: FC = () => (
    <>
        <div className="hero">
            <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
                <h1 className="font-bold text-3xl text-gray-900">Search for gifs</h1>
                <p className="font-base text-base text-gray-600">really great gifs served with elegance!</p>
            </div>
        </div>
    </>
);
