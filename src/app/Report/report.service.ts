import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';
import { Constants } from '../constants';
import { Report } from './report';




@Injectable()
export class ReportService{

	constructor(private _http:Http){

	}

	getCurrentReport():Promise<Report[]>{
		return this._http
		.get(Constants.base_url+'reports/reports/all' )
		.toPromise()
		.then((res:Response)=>res.json())
		.catch(error=>{
			let errMsg = (error.message) ? error.message :
				error.status ? `${error.status} - ${error.statusText}` : 'Server error';
			console.error(errMsg); // log to console instead
			return Observable.throw(errMsg);
		});
	}
}