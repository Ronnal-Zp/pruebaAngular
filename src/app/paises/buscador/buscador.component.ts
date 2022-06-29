import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais.interface';
import { PaisFavorito } from 'src/app/interfaces/paises-favoritos.interface';
import { ServicesCountry } from 'src/app/services/servicesCountry.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent  {

  constructor(private serviceCountry: ServicesCountry) { }

  @ViewChild("txtTermino") txtTermino !: ElementRef<HTMLInputElement>;


  urlBase: string = "https://restcountries.com/v3.1/";

  valor           : string = "";
  paisesMostrar   : Pais[] = [];
  arrFavoritos    : PaisFavorito[] = []; 

  @ViewChild("id")          ID         !: ElementRef<HTMLDataListElement>; 
  @ViewChild("nombrePais")  nombrePais !: ElementRef<HTMLDataListElement>; 
  @ViewChild("poblacion")   poblacion  !: ElementRef<HTMLDataListElement>; 
  @ViewChild("datosPaises") datosPaises  !: ElementRef; 


  buscar(){
    console.log(this.valor);

    this.serviceCountry.buscarPais(this.valor)
      .subscribe( (data) => {
        //console.log(data);
        this.paisesMostrar = data;
      },
      (err) =>{
        console.log(err);
        this.paisesMostrar = [];
      })
      
  }
  
  agregarFavoritos(event: any){

    const etiquetas = this.datosPaises.nativeElement;
    const arrHtml = event.path[2];


    console.log(event.path[2]);
    for (let index = 0; index < arrHtml.length; index++) {
      console.log(index);
    }


    for (var i = 0, row; row = etiquetas.rows[i]; i++) {

      for (var j = 0, col; col = row.cells[j]; j++) {
        //console.log((col.innerText));
        console.log(col);
        //console.log(`Txt: ${col.innerText} \tFila: ${i} \t Celda: ${j}`);
        
      }
    }

    //console.log(this.datosPaises);
    //console.log(this.datosPaises.nativeElement);

    /*
    const id = this.ID.nativeElement.textContent || "";
    const nombrePais = this.nombrePais.nativeElement.textContent || "";
    const poblacion = this.poblacion.nativeElement.textContent || "";
    */
    /*
    const objPaisFavorito:  PaisFavorito= {
      id,
      nombrePais,
      poblacion
    }
    */

    /*
    this.arrFavoritos.push(objPaisFavorito);

    console.log(this.arrFavoritos);

    localStorage.setItem("PaisesFavoritos", `${id}`)
    */

    //Recorrer etiquetas 💀👌
    //Ronnal-Zp
  }
}
