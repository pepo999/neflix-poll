'use strict'

let collection = new Collection()

displayCollection()

DataService.getSeries().then(data => {
    fillCollectionFromServer(data);
    displayCollection()
})

function fillCollectionFromServer(data) {
    for (let i = 0; i < data.length; i++) {
        const object = data[i];
        const serie = new Serie(object.title, object.creator, object.seasons, object.isCompleted, object.upVotes, object.downVotes, object.imageUrl, object.id);
        collection.addSerie(serie);
    }
}

function displayCollection() {
    const listOfSeries = document.getElementById('serie-list');
    for (let i = 0; i < collection.series.length; i++) {
        const serieAtIndexI = collection.series[i];
        //creating new li element with class 'li-serie'
        const newLi = document.createElement('li');
        newLi.classList.add('li-serie');
        //creation of img tag and giving it class 'li-image- and url:
        const serieImg = document.createElement('img');
        serieImg.classList.add('li-image');
        const imgUrl = serieAtIndexI.imageUrl;
        serieImg.src = imgUrl;

        const serieTitle = document.createElement('h2');
        const titleText = document.createTextNode(serieAtIndexI.title)
        serieTitle.appendChild(titleText);

        newLi.appendChild(serieTitle);
        listOfSeries.appendChild(newLi);
        listOfSeries.appendChild(serieImg)
    }

}

console.log(collection)
