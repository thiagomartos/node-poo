import { IAndavel } from './IAndavel';

export class Veiculo implements IAndavel {

    protected modelo: string;
    protected passageiros: number;

    constructor(modelo: string, passageiros: number = 0) {
        this.modelo = modelo;
        this.passageiros = passageiros;
    }

    andar(): void {

    }

    parar(): void {

    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string = "Sem Modelo"): void {
        this.modelo = modelo;
    }

    public getPassageiros(): number {
        return this.passageiros;
    }

    public setPassageiros(passageiros: number = 0): void {
        this.passageiros = passageiros;
    }
}