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
        return this.series.sort((serie1, serie2) => serie1.upVotes.compareByUpVotes(serie2.upVotes))
    }

    sortByDownVotes() {
        return this.series.sort((serie1, serie2) => serie1.compareByDownVotes(serie2))
    }

}