import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorias } from '../models/categorias'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasServiceService {

  constructor(private http: HttpClient) { }

  url: string = 'https://remembermebackend.herokuapp.com/api/';
  items: Categorias[] = [];
  getCategorias(): Observable<Categorias[]> {
    // console.log(this.http.get<Tarea[]>(this.url + '/tareas'))
    // return this.items;
    return this.http.get<Categorias[]>(this.url + 'categorias');

  }

  updateCategorias(id: number, data: Categorias): Observable<any> {
    return this.http.put(this.url + 'tareas' + '/' + id, data);
  }

  createCategoria(data: Categorias): Observable<any> {
    return this.http.post(this.url + 'categorias/', data);
  }

}