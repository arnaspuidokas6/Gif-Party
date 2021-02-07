/* eslint-disable react/prop-types */
import React, { ChangeEvent, FC } from 'react';
import '../../tailwind.output.css';

interface ISearchBar {
    setSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<ISearchBar> = ({ setSearchValue }) => (
    <>
        <div className="box pt-6">
            <div className="box-wrapper">
                <div className="bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                    <input
                        type="search"
                        name="query"
                        onChange={setSearchValue}
                        placeholder="Search for gifs"
                        className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                    />
                </div>
            </div>
        </div>
    </>
);
