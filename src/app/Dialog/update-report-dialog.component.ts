import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ReportComponent } from './../Report/report.component';
import { Report } from './../Report/report';

@Component({
  selector: 'update-report',
  templateUrl: 'update-report-dialog.html',
  styleUrls: ['update-report-dialog.css'],
})
export class UpdateReportDialog {

  report: Report;

  constructor(
    public dialogRef: MatDialogRef<ReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      
      this.report = data.report;

      console.log(this.report.associateName);  
      
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
