import axios from 'axios';
import { API_KEY } from './constants';
import { FetchGifsRequest, IGif, IGifResponse } from './types';

const createGif = (data: IGif): IGifResponse => {
    return {
        title: data.title ?? '',
        imageUrl: data?.images?.fixed_height.url ?? '',
        userImage: data?.user?.avatar_url ?? '',
        displayName: data?.user?.display_name ?? '',
    };
};

export const fetchGifs = async ({ query = 'happy', limit = '12' }: FetchGifsRequest): Promise<IGifResponse[]> => {
    const res: {
        data: { data: IGif[] };
    } = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=${limit}&api_key=${API_KEY}`);

    return res.data.data.map(createGif);
};
