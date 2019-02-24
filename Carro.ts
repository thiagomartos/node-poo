import { VeiculoMotorizado } from './VeiculoMotorizado';

export class Carro extends VeiculoMotorizado {

    constructor(modelo: string, passageiros: number = 5, cavalos: number) {
        super(modelo, passageiros, cavalos);
    }
    
}