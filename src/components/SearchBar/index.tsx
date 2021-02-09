import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { VALIDATION_PATTERN } from '../../api/constants';
import '../../tailwind.output.css';

interface ISearchBar {
    setSearchValue: Dispatch<SetStateAction<string>>;
}

export const SearchBar: FC<ISearchBar> = ({ setSearchValue }) => {
    const [isValid, setValid] = useState<boolean>(true);

    const handleSearchChange = (event: { target: { value: string } }) => {
        const typedValue = event.target.value;

        if (typedValue.match(VALIDATION_PATTERN)) {
            setValid(false);
            return;
        }

        setValid(true);
        setSearchValue(typedValue);
    };

    return (
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
                        onChange={handleSearchChange}
                        placeholder="Search for gifs"
                        className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                    />
                </div>
                {!isValid ? (
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        Invalid search value! Use only letters and numbers.
                    </span>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
