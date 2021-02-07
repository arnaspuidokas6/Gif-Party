/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { IGifResponse } from '../../api/types';

interface IModal {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toggleModal: (value: any) => void;
    selectedItem?: IGifResponse;
}

export const Modal: FC<IModal> = ({ toggleModal, selectedItem }) => {
    console.log(selectedItem?.userImage);
    return (
        <div className={`${selectedItem ? 'block' : 'hidden'} fixed bg-grayish w-full h-full top-0 left-0 bg-gray-200`}>
            <div className="mx-auto px-4 py-8 max-w-xl my-20">
                <div className="bg-white shadow-2xl rounded-xl mb-6 tracking-wide">
                    <div className="md:flex-shrink-0">
                        <img
                            src={selectedItem?.imageUrl}
                            alt={selectedItem?.title}
                            className="w-full h-full rounded-lg rounded-b-none"
                        />
                        <span className="absolute top-0 right-0 p-4 text-red-500" onClick={() => toggleModal(false)}>
                            <svg
                                className="h-6 w-6 fill-current text-grey hover:text-grey-darkest"
                                role="button"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                            </svg>
                        </span>
                    </div>
                    <div className="px-4 py-2">
                        <div className="author flex items-center -ml-3 my-3 mt-4">
                            <div className="user-logo">
                                <img
                                    className="w-12 h-12 object-cover rounded-full mx-4  shadow"
                                    src={selectedItem?.userImage}
                                    alt="avatar"
                                />
                            </div>
                            <h2 className="text-sm tracking-tighter text-gray-900">
                                <a href="#">{selectedItem?.displayName ?? 'No user name'}</a>{' '}
                                <span className="text-gray-600 pl-5">
                                    {selectedItem?.importedAt
                                        ? `Image imported on ${selectedItem?.importedAt}`
                                        : 'No import data'}
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
