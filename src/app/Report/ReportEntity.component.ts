import { Component,ViewChild } from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ReportEntityService } from "./ReportEntity.service";
import { ReportEntity} from "./ReportEntity";

@Component({
  selector: 'Report-root',
  templateUrl: './ReportEntity.component.html'
 })


export class ReportEntityComponent {
  displayedColumns = ['save','edit','employeeId','associateId','associateName','associateCity','locationType','customerID'
  ,'customerName','projectId','projectName','billableType','associateGrade','allocStartDate','Project_Billability',
  'Forecast_Period_From','Forecast_Period_To','Forecasted_On','Last_Updated_User','Last_Updated_Time','Portfolio','POC','Hours','Rate','Revenue'];
  dataSource: MatTableDataSource<ReportEntity>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  report: ReportEntity[] = [];

  constructor(private _reportService: ReportEntityService) {

    this._reportService
			.getCurrentReport()
			.then(
			report=>{
        
        console.log(report);

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(report);
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
}
