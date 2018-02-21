import { Component,ViewChild } from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ReportService } from "./report.service";
import { Report} from "./report";
import {MatDialog} from '@angular/material';
import {UpdateReportDialog} from './../Dialog/update-report-dialog.component';

@Component({
  selector: 'report-root',
  templateUrl: './report.component.html'
 })


export class ReportComponent {
  displayedColumns = ['edit','employeeId','associateId','associateName','associateCity','locationType','customerId'
  ,'customerName','projectId','projectName','billableType','associateGrade','allocStartDate','project_Billability',
  'forecastPeriodFrom','forecastPeriodTo','forecastedOn','lastUpdatedUser','lastUpdatedTime','rate','portfolio',
  'poc','hours','revenue'];
  dataSource: MatTableDataSource<Report>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  reports: Report[] = [];

  constructor(private _reportService: ReportService,public dialog: MatDialog) {

    this._reportService
			.getCurrentReport()
			.then(
			reports=>{
        
        console.log(reports);

        reports.forEach(rp => {
          console.log(rp.reportId);
        });

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(reports);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
				error =>  console.log("Error : " + error)
			);   
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editReport(reportE: Report){
    
    console.log(reportE);
    
    
    const dialogRef = this.dialog.open(UpdateReportDialog, {
      data: {
        report: reportE
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

}
