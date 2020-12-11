import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor( private http: HttpClient) { }
  getGenre(){
    return this.http.get<any>(`${environment.apiUrl}genres`)
  }
  addGenre(data){
    return this.http.post<any>(`${environment.apiUrl}genres`, data);
  }
}
