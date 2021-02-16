import React, { FC } from 'react';
import '../../tailwind.output.css';

export const NoGifs: FC = () => (
    <h1 data-testid="no-gifs" className="mt-20 font-bold text-3xl text-gray-900">
        Sorry, no gifs :( try typing in search.
    </h1>
);
