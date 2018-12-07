/**
 * Created by: ashwini agre
 * Date: 07/12/2018
 * Organization: Individual	
 */
import { Department } from './department.model';
export class Model
{
	
	id: Department; 
	name: string;
	test: number;
	
	constructor() { 
		this.id= new Department(); 
	}
	
	set setDepartment(value: Department) {
		this.id = value;
	}
	get getDepartment() : Department {
		return this.id;
	}
	set setName(value: string) {
		this.name = value;
	}
	get getName() : string {
		return this.name;
	}
	set setTest(value: number) {
		this.test = value;
	}
	get getTest() : number {
		return this.test;
	}
	
}
