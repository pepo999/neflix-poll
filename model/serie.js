class Serie{

    constructor(title, creator, seasons, isCompleted, upVotes, downVotes, imageUrl, id){
this.title = title;
this.creator = creator;
this.seasons = seasons;
this.isCompleted = isCompleted;
this.upVotes = upVotes;
this.downVotes = downVotes;
this.imageUrl = imageUrl;
if (id) {
    this.id = id;
}
    }

    compareByTitle(serie2) {
        return this.title.localeCompare(serie2.title);
    }

    compareByUpvotes(serie2) {
        if (this.upVotes > serie2.upVotes) {
            return -1
        } else if (this.upVotes < serie2.upVotes) {
            return 1
        } else {
            return 0
        }
    }

    compareByDownvotes(serie2) {
        if (this.downVotes > serie2.downVotes) {
            return -1
        } else if (this.downVotes < serie2.downVotes) {
            return 1
        } else {
            return 0
        }
    }

}