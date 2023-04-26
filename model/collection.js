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

    // sortByUpVotesAndre() {  //più semplice, non è il caso di creare una logica su serie.js
    //     return this.series.sort((serie1, serie2) => serie2.upVotes-serie1.upVotes)
    // }

    sortByDownVotes() {
        return this.series.sort((serie1, serie2) => serie1.compareByDownVotes(serie2))
    }

    // sortByAvg() {
    //     return this.series.sort((serie1, serie2) => serie1.compareByAvg(serie2))
    // }

    sortByAvg() {   
         //Andre version. Abbiamo creato una proprietà nel costruttore che calcola già il ranking (upvotes*2 -downvotes)
         //cazzata. ho creato un metodo GET con proprietà ranking che calcola già la logica del ranking. poi lo richiamo come proprietà
         //facendolo nel costruttore si sarebbero venuti a creare dei problemi dopo le chiamate al server
        return this.series.sort((serie1, serie2) => serie2.ranking - serie1.ranking)
    }

}