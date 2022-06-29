import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesCountry { 
  
  constructor(private http: HttpClient) { }
  urlBase: string = "https://restcountries.com/v3.1/"


  buscarPais(termino: string): Observable<Pais[]>{
    const url: string = `${ this.urlBase }name/${ termino }`;

    return this.http.get<Pais[]>(url);
  }
}
