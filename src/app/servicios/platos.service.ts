import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {
    constructor() { 
    }
    getplatos():InterfPlat[]{ 
      return this.platos;
    }
    getplato( idx: string){ 
      return this.platos[idx];
    }
    buscarHeroes ( termino: string ):InterfPlat[]{   
      let heroesArr:InterfPlat[] = [];
      termino = termino.toLowerCase();

      for(let heroe of this.platos) {
        let nombre = heroe.nombre.toLowerCase();
        
        if(nombre.indexOf( termino ) >= 0 ){
          heroesArr.push(heroe)
        }
      }
      return heroesArr;
    }
    private platos:InterfPlat[] =
    [
      {
        nombre: "Pizza",
        descripcion: "a la piedra, masa casera",
        img: "assets/imagenes/pizza.jpg"
      },
      {
        nombre: "Lomito",
        descripcion: "de cerdo, ahumado por leña",
        img: "assets/imagenes/lomito.jpg"
      },
      {
        nombre: "Locro",
        descripcion: "con salsa criolla y salsa blanca",
        img: "assets/imagenes/locro.jpg"
      }
    ];
}

export interface InterfPlat{
  nombre: string;
  img: string;
  descripcion: string;
};

 