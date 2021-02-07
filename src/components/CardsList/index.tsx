/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { IGifResponse } from '../../api/types';
import { Card } from '../Card';
import { NoGifs } from '../NoGifs';
import '../../tailwind.output.css';

interface ICardsList {
    cardsList: IGifResponse[];
}

export const CardsList: FC<ICardsList> = ({ cardsList }) => (
    <>
        {cardsList?.length ? (
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                {cardsList?.map((props, index) => (
                    <Card {...props} key={index} />
                ))}
            </div>
        ) : (
            <NoGifs />
        )}
    </>
);
