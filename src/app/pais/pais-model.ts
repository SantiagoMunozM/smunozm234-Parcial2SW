export class PaisModel {
    id: number;
    name: string;
    formation_year: number;
    capital: string;
    description:string;
    flag: string;

    constructor (
        id: number,
        name: string,
        formation_year: number,
        capital: string,
        description:string,
        flag: string,
    ) {
        this.id = id;
        this.name = name;
        this.formation_year = formation_year;
        this.capital = capital;
        this.description = description;
        this.flag = flag
    }
}
