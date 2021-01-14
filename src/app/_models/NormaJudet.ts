export interface NormaJudet {
    norma: number;
    judet: string;
    subnorme: Subnorma[];
}

export interface Subnorma {
    desc: string;
    norma: number;
}
