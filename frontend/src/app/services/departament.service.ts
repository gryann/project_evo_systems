import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departament } from '../models/departament-model';
import { Observable, Subject } from 'rxjs';
import { Functionary } from '../models/functionary-model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  constructor(private http: HttpClient) { }

  form_data: Departament;

  readonly APIUrl = "http://localhost:3000";

  url = environment.url


  getFunctionariesList(id: any ): Observable<Functionary[]> {
    return this.http.get<Functionary[]>(this.APIUrl + '/departaments/' + id + '/functionaries')
  }
  
  getDepartamentList(): Observable<Departament[]> {
    return this.http.get<Departament[]>(this.APIUrl + '/departaments')
  }
  
  deleteDepartament(id : any) {
    return this.http.delete(this.APIUrl + '/departaments/' + id);
  }

  updateDepartament(dep: Departament, id: any) {
    return this.http.patch(this.APIUrl + '/departaments/' + id, dep);
  }

  postDepartament(dep: Departament) {
    return this.http.post(this.APIUrl + '/departaments', dep);
  }

  private listeners = new Subject<any>();
  listen(): Observable<any> {
    return this.listeners.asObservable();
  }
  filter(filterBy: string) {
    this.listeners.next(filterBy);
  }

}
