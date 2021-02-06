import React, { FC } from 'react';
import { Card } from '../../components/Card';
import { Heading } from '../../components/Heading';
import { SearchBar } from '../../components/SearchBar';
import '../../tailwind.output.css';

export const GifsList: FC = () => (
    <>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            <Heading />
            <SearchBar />
            <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </>
);
