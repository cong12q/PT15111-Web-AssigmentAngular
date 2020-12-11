import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory(){
    return this.http.get<any>(`${environment.apiUrl}categories`)
  }

  addCategory(data){
    return this.http.post<any>(`${environment.apiUrl}categories`, data);
  }
}
