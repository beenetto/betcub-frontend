export class Deal{

	public content: String;
	public dateEnd: String;
	public dateStart: String;
	public description: String;
	public id: String;
	public jRanking: String;
	public pending: String;
	public temperature: String;
	public title: String;
	
	
	constructor(public modelObject: Object) {

		this.content = modelObject['content'];
		this.dateEnd = modelObject['dateEnd'];
		this.dateStart = modelObject['dateStart'];
		this.description = modelObject['description'];
		this.id = modelObject['dealId'];
		this.jRanking = modelObject['jRanking'];
		this.pending = modelObject['pending'];
		this.temperature = modelObject['temperature'];
		this.title = modelObject['title'];
	}

}