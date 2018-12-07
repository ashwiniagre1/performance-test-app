/**
 * Created by: ashwini agre
 * Date: 06/12/2018
 * Organization: Individual	
 */
import { Employee } from './employee.model';
export class Response
{
	
	success: boolean;
	dept: Employee; 
	abcd: string;
	
	constructor() { 
		this.dept= new Employee(); 
	}
	
	set setSuccess(value: boolean) {
		this.success = value;
	}
	get getSuccess() : boolean {
		return this.success;
	}
	set setEmployee(value: Employee) {
		this.dept = value;
	}
	get getEmployee() : Employee {
		return this.dept;
	}
	set setAbcd(value: string) {
		this.abcd = value;
	}
	get getAbcd() : string {
		return this.abcd;
	}
	
}
