import { VeiculoNaoMotorizado } from './VeiculoNaoMotorizado';

export class Bicicleta extends VeiculoNaoMotorizado {

    constructor(modelo: string, passageiros: number = 1) {
        super(modelo, passageiros);
    }
    
}