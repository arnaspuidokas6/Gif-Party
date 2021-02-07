export interface FetchGifsRequest {
    query?: string;
    limit?: string;
}

// https://developers.giphy.com/docs/api/schema/#image-object
export interface IGifResponse {
    imageUrl: string;
    title: string;
    userImage?: string;
    importedAt?: string;
    displayName?: string;
}

interface IUrl {
    url: string;
}

interface IImage {
    fixed_height: IUrl;
}

interface IUser {
    avatar_url?: string;
    display_name?: string;
}

// https://developers.giphy.com/docs/api/schema/#gif-object
export interface IGif {
    title?: string;
    images?: IImage;
    user?: IUser;
    import_datetime?: string;
}
