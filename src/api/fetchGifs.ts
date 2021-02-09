import axios from 'axios';
import { GIPHY_API_KEY, DEFAULT_LIST_ITEMS } from './constants';
import { FetchGifsRequest, IGif, IGifResponse } from './types';

const EMPTY_STRING = '';

const createGif = (data: IGif): IGifResponse => {
    return {
        title: data.title ?? EMPTY_STRING,
        imageUrl: data?.images?.fixed_height.url ?? EMPTY_STRING,
        userImage: data?.user?.avatar_url ?? EMPTY_STRING,
        displayName: data?.user?.display_name ?? EMPTY_STRING,
        importedAt: data?.import_datetime ?? EMPTY_STRING,
    };
};

export const fetchGifs = async ({
    query = 'happy',
    limit = `${DEFAULT_LIST_ITEMS}`,
}: FetchGifsRequest): Promise<IGifResponse[]> => {
    const res: {
        data: { data: IGif[] };
    } = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=${limit}&api_key=${GIPHY_API_KEY}`);

    return res.data.data.map(createGif);
};
