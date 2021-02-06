import React, { FC } from 'react';
import { Heading } from '../../components/Heading';
import { SearchBar } from '../../components/SearchBar';
import '../../tailwind.output.css';

export const GifsList: FC = () => (
    <>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            <Heading />
            <SearchBar />
        </div>
    </>
);
