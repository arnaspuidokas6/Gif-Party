import React, { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DEFAULT_SELECTED_ITEM, EMPTY_GIFS_LIST, GifsListContext } from '../../pages';
import { IGifResponse } from '../../api/types';
import { Card } from '.';

const gifsList = EMPTY_GIFS_LIST as IGifResponse[];
const selectedItem = DEFAULT_SELECTED_ITEM;
const openModal = false;
const cardData = { imageUrl: "https://giphy.com/embed/cmxiR3UgXYTh5QKJA6", title: "randomTitle" };
describe('Card', () => {
    const setOpenModal = jest.fn().mockResolvedValueOnce(true);
    const setSelectedItem = jest.fn().mockResolvedValueOnce(true);

   it('should match snapshot', async () => {
        const { container } = render(
        <GifsListContext.Provider value={{ gifsList, openModal, selectedItem, setSelectedItem, setOpenModal }}>
            <Card {...cardData} /> 
        </GifsListContext.Provider>
        );
        expect(container).toMatchSnapshot();
    });

   it('should have correct call', async () => {
        render(
        <GifsListContext.Provider value={{ gifsList, openModal, selectedItem, setSelectedItem, setOpenModal }}>
            <Card {...cardData} /> 
        </GifsListContext.Provider>
        );
       
        expect(screen.getByText('randomTitle')).toBeVisible();
        userEvent.click(screen.getByText('Preview'));
        expect(setOpenModal).toHaveBeenCalledTimes(1);
        expect(setOpenModal).toHaveBeenCalledWith(true);
        expect(setSelectedItem).toHaveBeenCalledTimes(1);
        expect(setSelectedItem).toHaveBeenCalledWith(cardData);
    });

})
