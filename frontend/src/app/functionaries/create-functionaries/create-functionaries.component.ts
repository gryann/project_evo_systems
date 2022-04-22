import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";

import { FunctionaryService } from 'src/app/services/functionary.service';

@Component({
  selector: 'app-create-functionaries',
  templateUrl: './create-functionaries.component.html',
  styleUrls: ['./create-functionaries.component.css']
})
export class CreateFunctionariesComponent implements OnInit {
  fileToUpload: File | null = null;

  constructor(public dialogbox: MatDialogRef<CreateFunctionariesComponent>,
    public service: FunctionaryService,
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
      RG: "",
      image: "",
      id_departament: this.service.form_data.id_departament
    }
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter('Register Click');
  }

  onSubmit(form: NgForm) {
    this.service.postFunctionary(form.value, this.fileToUpload, this.snackBar, this.resetForm, form)
  }

  onFileChange(file: any) {
    this.fileToUpload = file?.files?.item(0) || null;
  }

}
