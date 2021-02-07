import React, { FC, useState, useEffect } from 'react';
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
    const [searchError, setSearchError] = useState<boolean>(false);

    const handleSearchChange = (event: { target: { value: string } }) => {
        const typedValue = event.target.value;
        const regexpPattern = '[^A-Za-z0-9]';

        if (typedValue.match(regexpPattern)) {
            setSearchError(true);
        } else {
            setSearchError(false);
            setSearchValue(typedValue);
        }
    };

    useEffect(() => {
        fetchGifs({ query: searchValue }).then((newGifsList) => setGifsList(newGifsList));
    }, [searchValue]);

    return (
        <div className="container mx-auto">
            <Heading />
            <SearchBar setSearchValue={handleSearchChange} isValid={!searchError} />
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
