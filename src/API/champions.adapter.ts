import axios from 'axios';


export interface HttpAdapter {

    get<T>(url:string):Promise<T>
}

export class LoLChampionAdapterFetch implements HttpAdapter{

    async get<T>(url: string):Promise<T>{
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    }
}

export class LoLChampionAdapterAxios implements HttpAdapter{

    async get<T>(url: string): Promise<T> {
        const { data } = await axios.get<T>(url)
        return data;
    }
}