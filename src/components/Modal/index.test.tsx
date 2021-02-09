import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '.';
import { DEFAULT_SELECTED_ITEM, EMPTY_GIFS_LIST, GifsListContext } from '../../pages';
import { IGifResponse } from '../../api/types';

const gifsList = EMPTY_GIFS_LIST as IGifResponse[];
const selectedItem = DEFAULT_SELECTED_ITEM
const setSelectedItem = jest.fn();
const setOpenModal = jest.fn();
const openModal = true;

describe('SearchBar', () => {
    it('should render', () => {
        const { container } = render(
        <GifsListContext.Provider value={{ gifsList, openModal, selectedItem, setSelectedItem, setOpenModal }}>
            <Modal /> 
        </GifsListContext.Provider>
        );
       
        expect(screen.getByText('No user name')).toBeVisible();
        expect(screen.getByText('No import data')).toBeVisible();
        expect(container).toMatchSnapshot();
    });
})
