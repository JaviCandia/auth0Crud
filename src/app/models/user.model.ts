export class UserModel{
    id: string;
    nombre: string;
    apellidos: string;
    correo: string;

    costura: boolean;
    bordado: boolean;
    barro: boolean;
    manualidades: boolean;
    constructor(){
        this.costura = false;
        this.bordado = false;
        this.barro = false;
        this.manualidades = false;
    }
}