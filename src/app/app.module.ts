import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import {MatButtonModule, MatCheckboxModule,MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ReportService} from "./report.service";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		HttpModule,
		JsonpModule,
    MatButtonModule, MatCheckboxModule,MatTableModule,MatPaginatorModule,MatSortModule,
    MatFormFieldModule,MatInputModule
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
