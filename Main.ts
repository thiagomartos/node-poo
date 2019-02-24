//importações de módulos
import { Bicicleta } from './Bicicleta';
import { Carro } from './Carro';
import { Barco } from './Barco';
import { Moto } from './Moto';

//instancias de variaveis
let fan150: Moto = new Moto("Honda Fan", 2, 150);
let xl125: Moto = new Moto("Honda XL", 2, 125);
let sevenSeas: Barco = new Barco("Seven Seas Explorer", 500, 1250);
let civic: Carro = new Carro("Honda Civic", 5, 130);
let fit: Carro = new Carro("Honda Fit", 5, 110);
let city: Carro = new Carro("Honda City", 5, 140);
let caloi10: Bicicleta = new Bicicleta("Caloi 10", 1);

//exibe dados dos veiculos
fan150.exibirDados();
xl125.exibirDados();
sevenSeas.exibirDados();
civic.exibirDados();
fit.exibirDados();
city.exibirDados();
caloi10.exibirDados();