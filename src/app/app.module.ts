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
import { ReportEntityComponent } from './Report/ReportEntity.component';
import { ReportEntityService } from './Report/ReportEntity.service';


@NgModule({
  declarations: [
    AppComponent,ReportEntityComponent
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
  providers: [ReportService,ReportEntityService],
  bootstrap: [ReportEntityComponent]
})
export class AppModule { }
