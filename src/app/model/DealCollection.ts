class DealCollection {
	private deals: Deal[] = [];

	getDealById(id: string) {
		return this.deals
			.filter(d => d.id === id)
			.pop();
	}

	addDeal(deal: Deal) {
		this.deals.push(deal)
	}

	getAll() {
		return this.deals;
	} 
}