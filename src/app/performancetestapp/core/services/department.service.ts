/**
 * Created by: ashwini agre
 * Date: 07/12/2018
 * Organization: Individual	
 */
import { HttpClient } from '@angular/common/http';
import {HttpSubscriber} from '../../../shared/http.subsciber';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CORE_SERVICE_URL } from './core.service.constant';
import { Department } from '../models/department.model';

@Injectable()
export class DepartmentService extends HttpSubscriber {
	
	constructor(private httpClient: HttpClient) {
		super(); 
	}
	public save(id: String, onSuccess: (data: Department) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.post(CORE_SERVICE_URL.DEPARTMENT + '/save/'+id), onSuccess, onFailure);
	}
	public findAll(onSuccess: (data: Department []) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.get<Department []>(CORE_SERVICE_URL.DEPARTMENT + '/findall/'),  onSuccess, onFailure);
	}
}

