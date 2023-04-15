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

    sortByUpVotes() {
        return this.series.sort((serie1, serie2) => serie1.compareByUpVotes(serie2))
    }

    sortByDownVotes() {
        return this.series.sort((serie1, serie2) => serie1.compareByDownVotes(serie2))
    }

    sortByAvg() {
        return this.series.sort((serie1, serie2) => serie1.compareByAvg(serie2))
    }

}