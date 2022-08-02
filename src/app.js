import { LightningElement } from "lwc";
export default class App extends LightningElement {
 
account = {
  name : 'Padaria Pão Pomposo',
  type : 'prospect',
  rating : 'warm',
  website : 'www.google.com',
 }

pokemons = [
  {cod: 1, nome: 'Editá Poupers', tipo: 'raio', nivel: 99 },
  {cod: 2, nome: 'Hugo', tipo: 'gelo', nivel: 99 },
  {cod: 3, nome: 'Fleig', tipo: 'mofo', nivel: 99 },
  {cod: 4, nome: 'Jacaré Bocão', tipo: 'calango', nivel: 99 },
] 
}