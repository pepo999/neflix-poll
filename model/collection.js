class Collection {

    constructor(series = []) {
        this.series = series;
    }

    addSerie(serie) {
        this.series.push(serie)
    }

    sortByTitle() {
        return this.series.sort((serie1, serie2) => serie1.compareByTitle(serie2))
    }

    sortByCreationDate() {
        return this.series.sort((serie1, serie2) => serie1.compareByCreationDate(serie2))
    }

}