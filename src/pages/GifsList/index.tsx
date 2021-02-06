import React, { FC, useState } from 'react';
import { useEffect } from 'react';
import { fetchGifs } from '../../api/fetchGifs';
import { IGifResponse } from '../../api/types';
import { Card } from '../../components/Card';
import { Heading } from '../../components/Heading';
import { NoGifs } from '../../components/NoGifs';
import { SearchBar } from '../../components/SearchBar';
import '../../tailwind.output.css';

export const GifsList: FC = () => {
    const [gifsList, setGifsList] = useState<IGifResponse[]>();

    const fetchAndUpdateGifs = () => {
        fetchGifs({}).then((newGifsList) => setGifsList(newGifsList));
    };

    useEffect(() => {
        if (!gifsList?.length) {
            return fetchAndUpdateGifs();
        }
    }, []);
    return (
        <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            {gifsList?.length ? (
                <>
                    <Heading />
                    <SearchBar />
                    <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {gifsList?.map((props, index) => (
                            <Card {...props} key={index} />
                        ))}
                    </div>
                </>
            ) : (
                <NoGifs />
            )}
        </div>
    );
};
