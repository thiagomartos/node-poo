import { VeiculoMotorizado } from './VeiculoMotorizado';

export class Barco extends VeiculoMotorizado {

    constructor(modelo: string, passageiros: number = 2, cavalos: number) {
        super(modelo, passageiros, cavalos);
    }
    
}