import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DEFAULT_SELECTED_ITEM, EMPTY_GIFS_LIST, GifsListContext } from '../../pages';
import { IGifResponse } from '../../api/types';
import { GifsList } from '.';
import * as API from '../../api/fetchGifs';

const gifsList = EMPTY_GIFS_LIST as IGifResponse[];
const selectedItem = DEFAULT_SELECTED_ITEM;
const openModal = false;

const searchSpy = jest.spyOn(API, 'fetchGifs');
describe('Card', () => {
    const setOpenModal = jest.fn().mockResolvedValueOnce(true);
    const setSelectedItem = jest.fn().mockResolvedValueOnce(true);

    it('should match snapshot', async () => {
        const { container } = render(
            <GifsListContext.Provider value={{ gifsList, openModal, selectedItem, setSelectedItem, setOpenModal }}>
                <GifsList />
            </GifsListContext.Provider>,
        );
        expect(container).toMatchSnapshot();
    });

    it('should allow to call correct request and display list', async () => {
        const SEARCH_WORD = 'happy';
        const DEFAULT_LIMIT = '12';
        render(
            <GifsListContext.Provider value={{ gifsList, openModal, selectedItem, setSelectedItem, setOpenModal }}>
                <GifsList />
            </GifsListContext.Provider>,
        );

        act(() => {
            userEvent.type(screen.getByTestId('search-input'), SEARCH_WORD);
        });

        expect(searchSpy).toHaveBeenLastCalledWith({ limit: DEFAULT_LIMIT, query: SEARCH_WORD });
        await waitFor(() => expect(screen.queryByText('Sorry, no gifs :( try typing in search.')).toBeNull());
        expect(screen.getAllByTestId('gif-card')[11]).toBeVisible();
    });
});
