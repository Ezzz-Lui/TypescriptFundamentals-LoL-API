import { Champions } from '../Interfaces/champion.interface';
import { HttpAdapter, LoLChampionAdapterAxios } from '../API/champions.adapter';


export class ChampionLol {
    

    constructor(
        public idChampion: string, 
        private readonly http: HttpAdapter,
        public infoChampion?: string | ''
    ){}

    async getLore(){
        const data = await this.http.get<Champions>(`https://ddragon.leagueoflegends.com/cdn/14.16.1/data/es_MX/champion/${ this.idChampion }.json`)
        console.log(data.data[this.idChampion].lore)
    }

    async getStats(){
        const data = await this.http.get<Champions>(`https://ddragon.leagueoflegends.com/cdn/14.16.1/data/es_MX/champion/${ this.idChampion }.json`)
        console.log(data.data[this.idChampion].stats)
    }

    async getAbilities(){
        const data = await this.http.get<Champions>(`https://ddragon.leagueoflegends.com/cdn/14.16.1/data/es_MX/champion/${ this.idChampion }.json`)
        console.log(data.data[this.idChampion].spells)
    }

    async getChampionInfo(){
        const data = await this.http.get<Champions>(`https://ddragon.leagueoflegends.com/cdn/14.16.1/data/es_MX/champion/${ this.idChampion }.json`)
        console.log(`${data.data[this.idChampion].name},${data.data[this.idChampion].title}, ${data.data[this.idChampion].tags}`)        
    }

}   


export const ChampionGetInfo = new LoLChampionAdapterAxios();

export const Aatrox = new ChampionLol('Aatrox', ChampionGetInfo)

Aatrox.getChampionInfo();
Aatrox.getLore();
Aatrox.getAbilities();
Aatrox.getStats();