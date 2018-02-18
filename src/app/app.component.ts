import { Component,ViewChild } from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ReportService } from "./report.service";
import { Report} from "./report";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns = ['employeeId', 'associateName', 'type', 'location_type'];
  dataSource: MatTableDataSource<Report>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  report: Report[] = [];

  constructor(private _reportService: ReportService) {

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
