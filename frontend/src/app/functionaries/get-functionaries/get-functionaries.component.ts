import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { Functionary } from 'src/app/models/functionary-model';
import { DepartamentService } from 'src/app/services/departament.service';
import { FunctionaryService } from 'src/app/services/functionary.service';
import { CreateFunctionariesComponent } from '../create-functionaries/create-functionaries.component';
import { UpdateFunctionaryComponent } from '../update-functionaries/update-functionaries.component';

@Component({
  selector: 'app-get-functionaries',
  templateUrl: './get-functionaries.component.html',
  styleUrls: ['./get-functionaries.component.css']
})
export class GetFunctionariesComponent implements OnInit {
  readonly APIUrl = "http://localhost:3000";
  
  HomeScreen: boolean;

  id_departament: string;
  list_data: MatTableDataSource<Functionary>
  show_columns: string[] = ['Foto', 'Nome', 'RG', 'Opções'];

  constructor(
    private functionaryService: FunctionaryService,
    public departamentService: DepartamentService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    public snackBar: MatSnackBar) { 
      this.functionaryService.listen().subscribe((m: any) =>{
        console.log(m);
        this.refreshFunctionariesList();
      })
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id_departament = params['id'];
    });
    this.refreshFunctionariesList()
  }

  refreshFunctionariesList() {
    this.departamentService.getFunctionariesList(this.id_departament).subscribe(data => {
      this.list_data = new MatTableDataSource<Functionary>(data);
      for(const item of data) {
        item.image = `${this.APIUrl}${item.image}`
      }
    })
  }

  onDelete(id: any) {
    if(confirm('Tem certeza que deseja deletar este funcionário?')) {
      this.functionaryService.deleteFunctionary(id).subscribe( res => {
        this.refreshFunctionariesList();
        this.snackBar.open('Funcionário Deletado com Sucesso!', '', {
          duration: 5000,
          verticalPosition: 'top'
        });
      });
    }
  }

  onEdit(functionary: Functionary) {
    this.functionaryService.form_data = functionary;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(UpdateFunctionaryComponent, dialogConfig);
  }

  onCreate() {
    if(!this.functionaryService.form_data) {
      this.functionaryService.form_data = {
        id: '',
        name: '',
        RG: '',
        image: '',
        id_departament: ''
      }
    }
    this.functionaryService.form_data.id_departament = this.id_departament;
    console.log(this.functionaryService.form_data.id_departament)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(CreateFunctionariesComponent, dialogConfig);
  }

}
