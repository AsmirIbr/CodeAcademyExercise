export function Artist(params) {
    this.name = params.name;
    this.image = params.image[4]["#text"];
    this.similar = params.similar;
    this.bio = params.bio;
    this.date = params.bio.published;
    this.stats = params.stats;
    this.tags = params.tags;
}