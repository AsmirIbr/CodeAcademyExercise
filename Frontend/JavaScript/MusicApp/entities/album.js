export function Album(params){
    this.name = params.name;
    this.image = params.image[1]["#text"];
    this.tracks = params.tracks;    
}