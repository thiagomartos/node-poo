import { Veiculo } from './Veiculo';

export class VeiculoMotorizado extends Veiculo {
    private cavalos: number;

    constructor(modelo: string, passageiros: number = 0, cavalos: number) {
        super(modelo, passageiros);
        this.cavalos = cavalos;
    }

    ligar(): void {

    }

    desligar(): void {

    }

    exibirDados(): void {
        console.log(this.modelo + ", suporta " + this.passageiros + " passageiros e tem " + this.cavalos + " cavalos");
    }

    public getCavalos(): number {
        return this.cavalos;
    }

    public setCavalos(cavalos: number): void {
        this.cavalos = cavalos;
    }
}