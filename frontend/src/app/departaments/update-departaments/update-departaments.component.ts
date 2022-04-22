import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";

import { DepartamentService } from 'src/app/services/departament.service';


@Component({
  selector: 'app-update-departaments',
  templateUrl: './update-departaments.component.html',
  styleUrls: ['./update-departaments.component.css']
})
export class UpdateDepartamentsComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<UpdateDepartamentsComponent>,
    public service: DepartamentService,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter('Register Click');
  }

  onSubmit(form: NgForm) {
    this.service.updateDepartament(form.value, this.service.form_data.id).subscribe(res => {
      this.snackBar.open('Departamento Editado com Sucesso!', '',{
        duration: 5000,
        verticalPosition: 'top'
      })
    })
  }

}
