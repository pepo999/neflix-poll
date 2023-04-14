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
        //creating new li element with class 'li-serie' and 3 sub divs lcr
        const newLi = document.createElement('li');
        const leftLi = document.createElement('div');
        leftLi.classList.add('left-li');
        const centerLi = document.createElement('div');
        leftLi.classList.add('center-li');
        const rightLi = document.createElement('div');
        leftLi.classList.add('right-li');
        newLi.classList.add('li-serie');
        //creation of img tag and giving it class 'li-image- and url:
        const serieImg = document.createElement('img');
        serieImg.classList.add('li-image');
        const imgUrl = serieAtIndexI.imageUrl;
        serieImg.src = imgUrl;
        //creation of h2 title
        const serieTitle = document.createElement('h2');
        const titleText = document.createTextNode(serieAtIndexI.title);
        serieTitle.appendChild(titleText);
        //creation of creator text, seasons text, isCompleted text
        const serieCreator = document.createTextNode('Creator: ' + serieAtIndexI.creator);
        const serieSeasons = document.createTextNode('Seasons: ' + serieAtIndexI.seasons);
        const serieCompleted = document.createTextNode('Is it Finished? ' + serieAtIndexI.isCompleted);
        //creation of upVote and downVote buttons
        const upVoteBtn = document.createElement('button');
        upVoteBtn.classList.add('material-symbols-outlined');
        upVoteBtn.innerHTML = 'thumb_up'
        const downVoteBtn = document.createElement('button');
        downVoteBtn.classList.add('material-symbols-outlined');
        downVoteBtn.innerHTML = 'thumb_down'
        //filling the three divs
        leftLi.appendChild(serieImg);
        centerLi.appendChild(serieTitle);
        centerLi.appendChild(serieCreator);
        centerLi.appendChild(serieSeasons);
        centerLi.appendChild(serieCompleted);
        rightLi.appendChild(upVoteBtn);
        rightLi.appendChild(downVoteBtn);
        //putting the three divs inside li element
        newLi.appendChild(leftLi);
        newLi.appendChild(centerLi);
        newLi.appendChild(rightLi);
        //put li inside ul
        listOfSeries.appendChild(newLi);
    }

}

console.log(collection)
