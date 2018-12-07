/**
 * Created by: ashwini agre
 * Date: 07/12/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Department } from './../../models/department.model';

@Component(
{
	selector: 'testui',
	templateUrl: 'testui.component.html'
})
export class TestuiComponent implements OnInit {
	department: Department;
	
	constructor( private router: Router) {
		this.department = new Department();
	}
	ngOnInit() {
	}
	
}

