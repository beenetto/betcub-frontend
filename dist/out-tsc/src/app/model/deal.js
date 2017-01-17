var Deal = (function () {
    function Deal(modelObject) {
        this.modelObject = modelObject;
        this.content = modelObject['content'];
        this.dateEnd = modelObject['dateEnd'];
        this.dateStart = modelObject['dateStart'];
        this.link = modelObject['link'];
        this.id = modelObject['id'];
        this.jRanking = modelObject['jRanking'];
        this.pending = modelObject['pending'];
        this.temperature = modelObject['temperature'];
        this.title = modelObject['title'];
    }
    return Deal;
}());
export { Deal };
//# sourceMappingURL=../../../../../src/app/model/deal.js.map