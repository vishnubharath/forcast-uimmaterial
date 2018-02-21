import { Component,ViewChild } from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ReportService } from "./Report/report.service";
import { Report} from './Report/report';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  displayedColumns = ['save','edit','employeeId','projectId','locationId','esaProjectName','associateName','location','lob','type','leave_days','totalRate','month','year','totalHours','allocation_start_date','allocation_end_date','vacationNonBillableDays','vacationNonBillableHours','rate','location_type'];
  dataSource: MatTableDataSource<Report>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  report: Report[] = [];

  constructor() {}
}
