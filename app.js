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
    listOfSeries.innerHTML = '';
    if (collection.series.length > 10) {
        
        for (let i = 0; i < 10; i++) {
            const serieAtIndexI = collection.series[i];
            //creating new li element with class 'li-serie' and number of index + 3 sub divs lcr
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
            //creation of img tag and giving it class 'li-image- and url:
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
                DataService.putSerie(serieAtIndexI).then(upvotedSerie => {
                    upVoteBtn.style.opacity = '0.5';
                    displayCollection();
                })
            });
            const downVoteBtn = document.createElement('button');
            downVoteBtn.classList.add('material-symbols-outlined');
            downVoteBtn.innerHTML = 'thumb_down';
            downVoteBtn.addEventListener('click', (event) => {
                downVoteBtn.style.opacity = '1';
                serieAtIndexI.downVotes += 1;
                DataService.putSerie(serieAtIndexI).then(downvotedSerie => {
                    downVoteBtn.style.opacity = '0.5';
                    displayCollection();
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
    } else {

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
            //creation of img tag and giving it class 'li-image- and url:
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
                DataService.putSerie(serieAtIndexI).then(upvotedSerie => {
                    upVoteBtn.style.opacity = '0.5';
                    displayCollection();
                })
            });
            const downVoteBtn = document.createElement('button');
            downVoteBtn.classList.add('material-symbols-outlined');
            downVoteBtn.innerHTML = 'thumb_down';
            downVoteBtn.addEventListener('click', (event) => {
                downVoteBtn.style.opacity = '1';
                serieAtIndexI.downVotes += 1;
                DataService.putSerie(serieAtIndexI).then(downvotedSerie => {
                    downVoteBtn.style.opacity = '0.5';
                    displayCollection();
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