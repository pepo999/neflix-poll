class Serie {

    constructor(title, creator, seasons = 1, isCompleted = false, upVotes = 0, downVotes = 0, imageUrl, id){
this.title = title;
this.creator = creator;
this.seasons = seasons;
this.isCompleted = isCompleted;
this.upVotes = upVotes;
this.downVotes = downVotes;
this.imageUrl = imageUrl;
if (id) {
    this.id = id;
}}

    get ranking() {
        return this.upVotes * 2 - this.downVotes;
    }

    compareByTitle(serie2) {
        return this.title.localeCompare(serie2.title);
    }

    compareByUpVotes(serie2) {
        if (this.upVotes > serie2.upVotes) {
            return -1
        } else if (this.upVotes < serie2.upVotes) {
            return 1
        } else {
            return 0
        }
    }

    compareByDownVotes(serie2) {
        if (this.downVotes > serie2.downVotes) {
            return -1
        } else if (this.downVotes < serie2.downVotes) {
            return 1
        } else {
            return 0
        }
    }

    compareByAvg(serie2) {
        if (((this.upVotes * 2) - this.downVotes) > ((serie2.upVotes * 2) - serie2.downVotes)) {
            return -1
        } else if (((this.upVotes * 2) - this.downVotes) < ((serie2.upVotes * 2) - serie2.downVotes)) {
            return 1
        } else {
            return 0
        }
    }
}