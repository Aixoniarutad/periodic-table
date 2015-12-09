class Matter {
	atomic_number : number;

	constructor(public data){
		this.data = data;
	}

	information(){
		console.log(this.data);
		return this.data;
	}

	static get(variable: string){
		return this[variable];
	}
}