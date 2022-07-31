
export class Turno{
    constructor(
        public _id: string,
        public hora: string,
        public nombre_completo: string,
        public zonas: string,
        public fecha: string,
        public precio:number
    ){ }
}