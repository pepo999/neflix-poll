'use strict'

let collection = new Collection()

displayCollection()

startLoading()
DataService.getSeries().then(data => {
    fillCollectionFromServer(data);
    displayCollection();
    stopLoading()
}).catch(error => {//se qualcosa in questo si rompe, faccio una funzione che gestisca questo errore
    displayErrorMessage('qualcosa è andato storto ' + error);
    stopLoading()
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
    listOfSeries.innerHTML = '';
    for (let i = 0; i < collection.series.length; i++) {
        const serieAtIndexI = collection.series[i];
        //creating new li element with class 'li-serie' and number of inde + 3 sub divs lcr
        const newLi = document.createElement('li');
        const num = document.createElement('div');
        num.classList.add('num');
        const numText = document.createTextNode(i + 1);
        num.appendChild(numText);
        newLi.appendChild(num);
        const leftLi = document.createElement('div');
        leftLi.classList.add('left-li');
        const centerLi = document.createElement('div');
        centerLi.classList.add('center-li');
        const rightLi = document.createElement('div');
        rightLi.classList.add('right-li');
        newLi.classList.add('li-serie');
        //creation of img tag and giving it class 'li-image- and url
        const serieImg = document.createElement('img');
        serieImg.classList.add('li-image');
        const imgUrl = serieAtIndexI.imageUrl;
        serieImg.src = imgUrl;
        //creation of h2 title
        const serieTitle = document.createElement('h2');
        const titleText = document.createTextNode(serieAtIndexI.title);
        serieTitle.appendChild(titleText);
        //creation of creator text, seasons text
        const serieCreator = document.createElement('span');
        const serieSeasons = document.createElement('span');
        const serieCreatorText = document.createTextNode('Creator: ' + serieAtIndexI.creator);
        const serieSeasonsText = document.createTextNode('Seasons: ' + serieAtIndexI.seasons + isCompleted(serieAtIndexI));
        serieCreator.appendChild(serieCreatorText);
        serieSeasons.appendChild(serieSeasonsText);
        //creation of upVote and downVote buttons
        const upVoteBtn = document.createElement('button');
        upVoteBtn.classList.add('material-symbols-outlined');
        upVoteBtn.innerHTML = 'thumb_up';
        upVoteBtn.addEventListener('click', (event) => {
            upVoteBtn.style.opacity = '1';
            serieAtIndexI.upVotes += 1;
            startLoading();
            DataService.putSerie(serieAtIndexI).then(upvotedSerie => {
                upVoteBtn.style.opacity = '0.5';
                displayCollection();
                stopLoading();
            }).catch(error => {
                displayErrorMessage('non puoi votare ora'+ error);
                stopLoading();
            })
        });
        const downVoteBtn = document.createElement('button');
        downVoteBtn.classList.add('material-symbols-outlined');
        downVoteBtn.innerHTML = 'thumb_down';
        downVoteBtn.addEventListener('click', (event) => {
            downVoteBtn.style.opacity = '1';
            serieAtIndexI.downVotes += 1;
            startLoading();
            DataService.putSerie(serieAtIndexI).then(downvotedSerie => {
                downVoteBtn.style.opacity = '0.5';
                displayCollection();
                stopLoading();
            }).catch(error => {
                displayErrorMessage('non puoi votare ora ');
                stopLoading();
            })
        });
        //creation of numbers of upvotes and downvotes
        const numUpVotes = document.createTextNode(serieAtIndexI.upVotes);
        const divUpVotes = document.createElement('div');
        divUpVotes.style.color = 'limegreen';
        divUpVotes.classList.add('div-upvotes');
        divUpVotes.appendChild(numUpVotes);
        const numDownVotes = document.createTextNode(serieAtIndexI.downVotes);
        const divDownVotes = document.createElement('div');
        divDownVotes.style.color = 'rgb(225, 6, 6)';
        divDownVotes.classList.add('div-downvotes');
        divDownVotes.appendChild(numDownVotes);
        //filling the three divs
        leftLi.appendChild(serieImg);
        centerLi.appendChild(serieTitle);
        centerLi.appendChild(serieCreator);
        centerLi.appendChild(serieSeasons);
        rightLi.appendChild(upVoteBtn);
        rightLi.appendChild(downVoteBtn);
        rightLi.appendChild(divUpVotes);
        rightLi.appendChild(divDownVotes);
        //putting the three divs inside li element
        newLi.appendChild(leftLi);
        newLi.appendChild(centerLi);
        newLi.appendChild(rightLi);
        //put li[i] inside ul
        listOfSeries.appendChild(newLi);
    }
}


function orderByTitle() {
    collection.sortByTitle();
    displayCollection();
}

function orderByUpVotes() {
    collection.sortByUpVotes();
    displayCollection();
}

function orderByDownVotes() {
    collection.sortByDownVotes();
    displayCollection();
}

function orderByAvg() {
    collection.sortByAvg();
    displayCollection();
}

function isCompleted(serie) {
    let points = ' . . .';
    let noPoints = '';
    if (serie.isCompleted === false) {
        return points;
    } else {
        return noPoints;
    }
}

function saveNewSerie() {
    const titleInput = document.getElementById('title-input');
    const creatorInput = document.getElementById('creator-input');
    const seasonsInput = document.getElementById('seasons-input');
    const completedInput = document.getElementById('completed-input');

    const newSerieTitle = titleInput.value;
    const newSerieCreator = creatorInput.value;
    const newSerieSeasons = seasonsInput.value;
    const newSerieCompleted = completedInput.checked;

    const newSerie = new Serie(newSerieTitle, newSerieCreator, newSerieSeasons, newSerieCompleted);

    console.log(newSerie)

startLoading();
    DataService.postSerie(newSerie).then(savedSerie => {
        // const finalSerie = new Serie(savedSerie.title, savedSerie.creator, etcetc) è quello che facciamo nella linea sotto più esplicitato
        newSerie.id = savedSerie.id;
        collection.addSerie(newSerie); //qua bisognerebbe mettere(finalSerie)
        displayCollection();
        stopLoading();
    }).catch(error =>
        displayErrorMessage('non puoi aggiungere una nuova serie al momento'));
        stopLoading();
}

function displayErrorMessage(message) {
    const errorMessage = document.getElementById('error-message');
    const errorNode = document.createTextNode(message);
    errorMessage.appendChild(errorNode);
}

function startLoading() {
const loadingIcon = document.getElementById('loading-icon');
loadingIcon.style.display = 'inline-block';
}

function stopLoading() {
    const loadingIcon = document.getElementById('loading-icon');
    loadingIcon.style.display = 'none';
}