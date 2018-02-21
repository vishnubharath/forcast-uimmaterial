import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ReportComponent } from './../Report/report.component';
import { Report } from './../Report/report';
import { ReportService } from './../Report/report.service';
@Component({
  selector: 'update-report',
  templateUrl: 'update-report-dialog.html',
  styleUrls: ['update-report-dialog.css'],
})
export class UpdateReportDialog {

  report: Report;

  constructor(
    public dialogRef: MatDialogRef<ReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _reportService: ReportService) { 
      
      this.report = data.report;
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  update(){
    
    console.log("test ..");
    

    this._reportService.updateReport(this.report).subscribe(
      resultArray => { console.log("done");
       },
      error => console.log("Error :: " + error)
  );
  }

}
