import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FunctionariesComponent } from './functionaries/functionaries.component';
import { GetFunctionariesComponent } from './functionaries/get-functionaries/get-functionaries.component';
import { UpdateFunctionaryComponent } from './functionaries/update-functionaries/update-functionaries.component';
import { CreateFunctionariesComponent } from './functionaries/create-functionaries/create-functionaries.component';
import { DepartamentsComponent } from './departaments/departaments.component';
import { CreateDepartamentsComponent } from './departaments/create-departaments/create-departaments.component';
import { GetDepartamentsComponent } from './departaments/get-departaments/get-departaments.component';
import { UpdateDepartamentsComponent } from './departaments/update-departaments/update-departaments.component';
import { Routes } from './routes';
import { DepartamentService } from './services/departament.service';
import { FunctionaryService } from './services/functionary.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FunctionariesComponent,
    GetFunctionariesComponent,
    UpdateFunctionaryComponent,
    CreateFunctionariesComponent,
    DepartamentsComponent,
    CreateDepartamentsComponent,
    GetDepartamentsComponent,
    UpdateDepartamentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    RouterModule.forChild(Routes)
  ],
  providers: [
    DepartamentService,
    FunctionaryService
  ],
  bootstrap: [ AppComponent ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  entryComponents: [CreateDepartamentsComponent, UpdateDepartamentsComponent]
})
export class AppModule { }
