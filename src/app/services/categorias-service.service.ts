import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasServiceService {

  constructor(private http: HttpClient) { }

  url: string = 'https://remembermebackend.herokuapp.com/api/';
  items: Categoria[] = [];
  getCategorias(id_usuario:number): Observable<Categoria[]> {
    // console.log(this.http.get<Tarea[]>(this.url + '/tareas'))
    // return this.items;
    return this.http.get<Categoria[]>(this.url + 'categoriausr'+ '/' + id_usuario);

  }

  updateCategorias(id: number, data: Categoria): Observable<any> {
    return this.http.put(this.url + 'categoria' + '/' + id, data);
  }

  createCategoria(data: Categoria): Observable<any> {
    return this.http.post(this.url + 'categoria/', data);
  }

}