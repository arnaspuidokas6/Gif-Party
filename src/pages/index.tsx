import React, { createContext, Dispatch, FC, SetStateAction, useContext } from 'react';
import { IGifResponse } from '../api/types';

export const EMPTY_GIFS_LIST = [];
export const IS_VALID = true;
export const DEFAULT_SELECTED_ITEM = {} as IGifResponse;
export const DEFAULT_OPEN_MODAL = false;
const EMPTY_VOID = () => {};

interface IGifsContext {
    gifsList: IGifResponse[];
    selectedItem: IGifResponse;
    setSelectedItem: (value: IGifResponse) => void;
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const GifsListContext = createContext<IGifsContext>({
    gifsList: EMPTY_GIFS_LIST,
    selectedItem: DEFAULT_SELECTED_ITEM,
    setSelectedItem: EMPTY_VOID,
    openModal: DEFAULT_OPEN_MODAL,
    setOpenModal: EMPTY_VOID,
});

export const useGifsContext = () => {
    const context = useContext(GifsListContext);
    if (!context) {
        throw new Error("This component can't be used outside GifsList component");
    }
    return context;
};

export const GifsListPage: FC<IGifsContext> = ({
    gifsList,
    selectedItem,
    setSelectedItem,
    children,
    openModal,
    setOpenModal,
}) => {
    const context: IGifsContext = {
        gifsList,
        selectedItem,
        setSelectedItem,
        setOpenModal,
        openModal,
    };
    return <GifsListContext.Provider value={context}>{children}</GifsListContext.Provider>;
};
