import React, { FC, useState, useEffect, SetStateAction } from 'react';
import { fetchGifs } from '../../api/fetchGifs';
import { IGifResponse } from '../../api/types';
import { Card } from '../../components/Card';
import { Heading } from '../../components/Heading';
import { NoGifs } from '../../components/NoGifs';
import { SearchBar } from '../../components/SearchBar';
import '../../tailwind.output.css';

export const GifsList: FC = () => {
    const [gifsList, setGifsList] = useState<IGifResponse[]>();
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchChange = (event: { target: { value: SetStateAction<string> } }) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        fetchGifs({ query: searchValue }).then((newGifsList) => setGifsList(newGifsList));
    }, [searchValue]);

    return (
        <div className="container mx-auto">
            <Heading />
            <SearchBar setSearchValue={handleSearchChange} />
            <>
                {gifsList?.length ? (
                    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {gifsList?.map((props, index) => (
                            <Card {...props} key={index} />
                        ))}
                    </div>
                ) : (
                    <NoGifs />
                )}
            </>
        </div>
    );
};
