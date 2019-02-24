import { Veiculo } from './Veiculo';

export class VeiculoNaoMotorizado extends Veiculo {
    
    constructor(modelo: string, passageiros: number = 0) {
        super(modelo, passageiros);
    }

    
    exibirDados(): void {
        // console.log(´Modelo: ${this.modelo}´);
        console.log(this.modelo + ", suporta " + this.passageiros + " passageiros");
    }
}