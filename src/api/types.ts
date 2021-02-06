export interface FetchGifsRequest {
    query?: string;
    limit?: string;
}

// https://developers.giphy.com/docs/api/schema/#image-object
export interface IGifResponse {
    imageUrl: string;
    title: string;
}

interface IUrl {
    url: string;
}

interface IImage {
    fixed_height: IUrl;
}

// https://developers.giphy.com/docs/api/schema/#gif-object
export interface IGif {
    title?: string;
    images?: IImage;
}
