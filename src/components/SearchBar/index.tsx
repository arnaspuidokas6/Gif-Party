import React, { FC } from 'react';
import '../../tailwind.output.css';

export const SearchBar: FC = () => (
    <>
        <div className="box pt-6">
            <div className="box-wrapper">
                <div className="bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                    <input
                        type="search"
                        name=""
                        placeholder="search for images"
                        className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                    />
                </div>
            </div>
        </div>
    </>
);
