import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";

import { FunctionaryService } from 'src/app/services/functionary.service';


@Component({
  selector: 'app-update-functionaries',
  templateUrl: './update-functionaries.component.html',
  styleUrls: ['./update-functionaries.component.css']
})
export class UpdateFunctionaryComponent implements OnInit {
  fileToUpload: File | null = null;

  constructor(public dialogbox: MatDialogRef<UpdateFunctionaryComponent>,
    public service: FunctionaryService,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter('Register Click');
  }

  onSubmit(form: NgForm) {
    this.service.updateFunctionary({ functionary: form.value, file: this.fileToUpload }, this.service.form_data.id).subscribe(() => {
      this.snackBar.open('Funcionário Editado com Sucesso!', '',{
        duration: 5000,
        verticalPosition: 'top'
      })
    })
  }

  onFileChange(file: any) {
    this.fileToUpload = file?.files?.item(0) || null;
  }

}
