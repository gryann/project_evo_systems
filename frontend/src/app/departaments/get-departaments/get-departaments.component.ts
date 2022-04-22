import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Departament } from 'src/app/models/departament-model';
import { DepartamentService } from 'src/app/services/departament.service';
import { CreateDepartamentsComponent } from '../create-departaments/create-departaments.component';
import { UpdateDepartamentsComponent } from '../update-departaments/update-departaments.component';


@Component({
  selector: 'app-get-departaments',
  templateUrl: './get-departaments.component.html',
  styleUrls: ['./get-departaments.component.css']
})
export class GetDepartamentsComponent implements OnInit {

  constructor(private service: DepartamentService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar ) { 
      this.service.listen().subscribe((m: any) =>{
        console.log(m);
        this.refreshDepartamentList();
      })
    }

  list_data: MatTableDataSource<any>;
  show_columns: string[] = ['Nome', 'Sigla', 'Opções'];


  ngOnInit(): void {
    this.refreshDepartamentList();
  }

  refreshDepartamentList() {
    this.service.getDepartamentList().subscribe(data => {
      this.list_data = new MatTableDataSource(data);
    })
  }

  onEdit(departament: Departament) {
    this.service.form_data = departament;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(UpdateDepartamentsComponent, dialogConfig);
  }

  onDelete(id: any) {
    if(confirm('Tem certeza que deseja deletar este departamento?')) {
      this.service.deleteDepartament(id).subscribe( res => {
        this.refreshDepartamentList();
        this.snackBar.open('Departamento Deletado com Sucesso!', '', {
          duration: 5000,
          verticalPosition: 'top'
        });
      });
    }
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(CreateDepartamentsComponent, dialogConfig);
  }
}
