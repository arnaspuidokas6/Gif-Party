import React, { FC, useState, useEffect } from 'react';
import { fetchGifs } from '../../api/fetchGifs';
import { IGifResponse } from '../../api/types';
import { Heading } from '../../components/Heading';
import { SearchBar } from '../../components/SearchBar';
import '../../tailwind.output.css';
import debounce from 'lodash.debounce';
import { DEFAULT_LIST_ITEMS, VALIDATION_PATTERN } from '../../api/constants';
import { CardsList } from '../../components/CardsList';
import { Modal } from '../../components/Modal';

const DEBOUNCE_COUNT = 100;

export const GifsList: FC = () => {
    const [gifsList, setGifsList] = useState<IGifResponse[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchError, setSearchError] = useState<boolean>(false);
    const [gifsListLimit, setGifsListLimit] = useState<number>(DEFAULT_LIST_ITEMS);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedItem, setSelectedItem] = useState<any>();

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

    const toggleModal = (value: IGifResponse) => setSelectedItem(value);

    return (
        <>
            <div className="container mx-auto">
                <Heading />
                <SearchBar setSearchValue={handleSearchChange} isValid={!searchError} />
                <CardsList cardsList={gifsList} toggleModal={toggleModal} />
            </div>
            <Modal toggleModal={toggleModal} selectedItem={selectedItem} />
        </>
    );
};
