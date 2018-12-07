/**
 * Created by: ashwini agre
 * Date: 06/12/2018
 * Organization: Individual	
 */
export class Employee
{
	
	id: string;
	name: string;
	email: string;
	
	constructor() { 
	}
	
	set setId(value: string) {
		this.id = value;
	}
	get getId() : string {
		return this.id;
	}
	set setName(value: string) {
		this.name = value;
	}
	get getName() : string {
		return this.name;
	}
	set setEmail(value: string) {
		this.email = value;
	}
	get getEmail() : string {
		return this.email;
	}
	
}
