import { Component,ViewChild } from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ReportEntityService } from "./ReportEntity.service";
import { ReportEntity} from "./ReportEntity";

@Component({
  selector: 'Report-root',
  templateUrl: './ReportEntity.component.html'
 })


export class ReportEntityComponent {
  displayedColumns = ['save','edit','employeeId','associateId','associateName','associateCity','locationType','customerId'
  ,'customerName','projectId','projectName','billableType','associateGrade','allocStartDate','project_Billability',
  'forecastPeriodFrom','forecastPeriodTo','forecastedOn','lastUpdatedUser','lastUpdatedTime','rate','portfolio',
  'poc','hours','revenue'];
  dataSource: MatTableDataSource<ReportEntity>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  report: ReportEntity[] = [];

  constructor(private _reportService: ReportEntityService) {

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
}
