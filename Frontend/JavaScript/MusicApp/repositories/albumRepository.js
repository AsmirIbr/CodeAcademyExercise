import {Album} from "/entities/album.js";

export function AlbumRepository() {
    this.getAlbums = async function (artistName, topAlbums) {
        var result = [];

        try {
            for(var i = 0; i < topAlbums.length; i++){

            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=cb12f4c4cc252eb5328201724e008ca4&artist="+ artistName +"&album="+topAlbums[i] +"&format=json");
            
            var albumData = await response.json();
            result.push(new Album(albumData.album))
            
        }
            return result;

        } catch (error) {
            return result;
        }
    }
}