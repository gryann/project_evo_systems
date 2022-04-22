import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departament } from '../models/departament-model';
import { Observable, Subject } from 'rxjs';
import { Functionary } from '../models/functionary-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

type updateFunctionary = {
  functionary: Functionary
  file: File | null
}


@Injectable({
  providedIn: 'root'
})
export class FunctionaryService {
  form_data: Functionary;

  constructor(private http: HttpClient) { }

  readonly APIUrl = "http://localhost:3000/functionaries";

  deleteFunctionary(id: any) {
    return this.http.delete(this.APIUrl + '/' + id);
  }

  updateFunctionary({ functionary, file }: updateFunctionary, id: any) {
    if (file) {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      this.http.post(this.APIUrl + '/' + id + '/images', formData).subscribe()
    }

    return this.http.patch<Functionary>(this.APIUrl + '/' + id, functionary);

  }

  postFunctionary(functionary: Functionary, file: File | null, snackBar: MatSnackBar, resetForm: Function, form: NgForm) {
    functionary.id_departament = this.form_data.id_departament;
    return this.http.post(this.APIUrl, functionary).subscribe((resp: any) => {
      if (file) {
        const formData: FormData = new FormData();
        formData.append('file', file, file.name);
        this.http.post(this.APIUrl+ '/' + resp.id + '/images', formData).subscribe(resp => {
          resetForm(form)
          snackBar.open('Funcionário Cadastrado com Sucesso!', '', {
            duration: 5000,
            verticalPosition: 'top'
          });
        })
      }
    }
    );
  }

  private listeners = new Subject<any>();
  listen(): Observable<any> {
    return this.listeners.asObservable();
  }
  filter(filterBy: string) {
    this.listeners.next(filterBy);
  }


}