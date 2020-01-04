export class Build{
	public name:string = 'Name';
	public description:string = 'Desc';
	public price:number = 10.5;

	public imagePath:string;

	constructor(name:string,desc:string,pathImg:string,price:number){
		this.name = name;
		this.description = desc;
		this.imagePath = pathImg;
		this.price = price;
	}

	
}