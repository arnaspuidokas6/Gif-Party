import React, { FC, useState, useEffect } from 'react';
import { fetchGifs } from '../../api/fetchGifs';
import { IGifResponse } from '../../api/types';
import { Card } from '../../components/Card';
import { Heading } from '../../components/Heading';
import { NoGifs } from '../../components/NoGifs';
import { SearchBar } from '../../components/SearchBar';
import '../../tailwind.output.css';
import debounce from 'lodash.debounce';
import { DEFAULT_LIST_ITEMS, VALIDATION_PATTERN } from '../../api/constants';

const DEBOUNCE_COUNT = 100;

export const GifsList: FC = () => {
    const [gifsList, setGifsList] = useState<IGifResponse[]>();
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchError, setSearchError] = useState<boolean>(false);
    const [gifsListLimit, setGifsListLimit] = useState<number>(DEFAULT_LIST_ITEMS);

    const handleSearchChange = (event: { target: { value: string } }) => {
        const typedValue = event.target.value;

        if (typedValue.match(VALIDATION_PATTERN)) {
            setSearchError(true);
            return;
        }

        setSearchError(false);
        setSearchValue(typedValue);
    };

    window.onscroll = debounce(() => {
        if (searchError) return;
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setGifsListLimit((limit) => limit + DEFAULT_LIST_ITEMS);
        }
    }, DEBOUNCE_COUNT);

    useEffect(() => {
        searchValue &&
            fetchGifs({ query: searchValue, limit: `${gifsListLimit}` }).then((newGifsList) =>
                setGifsList(newGifsList),
            );
    }, [searchValue, gifsListLimit]);

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
