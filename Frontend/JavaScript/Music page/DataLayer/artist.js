function Artist(data) {
    this.name = data.name;
    this.biography = data.bio.content;
    this.album = data.image;
    this.summary = data.bio.summary;
    this.stats = data.stats;
    this.tags = data.tags.tag;
    this.similar = data.similar;
    // console.log(this.name, this.biography, this.album, this.summary, this.stats, this.tags, this.similar)
}

