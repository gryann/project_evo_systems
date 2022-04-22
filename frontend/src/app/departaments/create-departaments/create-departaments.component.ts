import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";

import { DepartamentService } from 'src/app/services/departament.service';

@Component({
  selector: 'app-create-departaments',
  templateUrl: './create-departaments.component.html',
  styleUrls: ['./create-departaments.component.css']
})
export class CreateDepartamentsComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<CreateDepartamentsComponent>,
    public service: DepartamentService,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if(form!= null)
    form.resetForm();

    this.service.form_data = {
      id: "",
      name: "",
      initials: ""
    }
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter('Register Click');
  }

  onSubmit(form: NgForm) {
    this.service.postDepartament(form.value).subscribe(res =>
      {
        this.resetForm(form)
        this.snackBar.open('Departamento Cadastrado com Sucesso!', '', {
          duration: 5000,
          verticalPosition: 'top'
        });
      })
  }
}
