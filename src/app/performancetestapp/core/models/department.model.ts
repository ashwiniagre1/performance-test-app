/**
 * Created by: ashwini agre
 * Date: 06/12/2018
 * Organization: Individual	
 */
export class Department
{
	
	id: number;
	name: number;
	
	constructor() { 
	}
	
	set setId(value: number) {
		this.id = value;
	}
	get getId() : number {
		return this.id;
	}
	set setName(value: number) {
		this.name = value;
	}
	get getName() : number {
		return this.name;
	}
	
}
