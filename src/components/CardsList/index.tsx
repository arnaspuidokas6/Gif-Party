import React, { FC } from 'react';
import { Card } from '../Card';
import { NoGifs } from '../NoGifs';
import '../../tailwind.output.css';
import { useGifsContext } from '../../pages';

export const CardsList: FC = () => {
    const { gifsList } = useGifsContext();
    return (
        <>
            {gifsList?.length ? (
                <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {gifsList?.map((props, index) => (
                        <Card {...props} key={index} />
                    ))}
                </div>
            ) : (
                <NoGifs />
            )}
        </>
    );
};
