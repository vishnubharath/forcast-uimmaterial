import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ReportComponent } from './Report/report.component';
import { ReportService } from './Report/report.service';
import { UpdateReportDialog } from './Dialog/update-report-dialog.component';


@NgModule({
  declarations: [
    AppComponent, ReportComponent, UpdateReportDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatDialogModule, MatGridListModule, MatInputModule,MatIconModule,
    MatFormFieldModule
  ],
  providers: [ReportService],
  bootstrap: [ReportComponent],
  entryComponents: [
    UpdateReportDialog
  ]
})
export class AppModule { }
