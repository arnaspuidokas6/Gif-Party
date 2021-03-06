import React, { FC, useState, useEffect } from 'react';
import { IGifResponse } from '../../api/types';
import '../../tailwind.output.css';
import { DEFAULT_LIST_ITEMS } from '../../api/constants';
import { fetchGifs } from '../../api/fetchGifs';
import { CardsList } from '../../components/CardsList';
import { Heading } from '../../components/Heading';
import { Modal } from '../../components/Modal';
import { SearchBar } from '../../components/SearchBar';
import { GifsListPage } from '..';
import debounce from 'lodash.debounce';

export const GifsList: FC = () => {
    const [gifsList, setGifsList] = useState<IGifResponse[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [gifsListLimit, setGifsListLimit] = useState<number>(DEFAULT_LIST_ITEMS);
    const [selectedItem, setSelectedItem] = useState<IGifResponse>({} as IGifResponse);
    const [openModal, setOpenModal] = useState<boolean>(false);

    window.onscroll = debounce(() => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setGifsListLimit((limit) => limit + DEFAULT_LIST_ITEMS);
        }
    }, 100);

    useEffect(() => {
        fetchGifs({ query: searchValue, limit: `${gifsListLimit}` }).then((newGifsList) => setGifsList(newGifsList));
    }, [searchValue, gifsListLimit]);

    return (
        <GifsListPage
            setSelectedItem={setSelectedItem}
            gifsList={gifsList}
            selectedItem={selectedItem}
            openModal={openModal}
            setOpenModal={setOpenModal}
        >
            <div className="container mx-auto">
                <Heading />
                <SearchBar setSearchValue={setSearchValue} />
                <CardsList />
            </div>
            <Modal />
        </GifsListPage>
    );
};
