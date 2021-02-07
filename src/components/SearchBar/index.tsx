/* eslint-disable react/prop-types */
import React, { ChangeEvent, FC } from 'react';
import '../../tailwind.output.css';

interface ISearchBar {
    setSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
    isValid: boolean;
}

export const SearchBar: FC<ISearchBar> = ({ setSearchValue, isValid }) => (
    <div className="box pt-6">
        <div className="box-wrapper">
            <div
                className={`bg-white rounded flex items-center w-full p-3 shadow-sm border ${
                    isValid ? 'border-gray-200' : 'border-red-500'
                }`}
            >
                <input
                    type="search"
                    name="query"
                    onChange={setSearchValue}
                    placeholder="Search for gifs"
                    className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                />
            </div>
            {!isValid ? (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    Invalid search value!
                </span>
            ) : (
                <></>
            )}
        </div>
    </div>
);
