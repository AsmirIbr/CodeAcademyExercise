import {Artist} from "/entities/artist.js";

export function ArtistRepository() {
    this.getArtist = async function (artistName) {
        var result = null;
        var artistMethod = "artist.getInfo";

        var url = await fetch("http://ws.audioscrobbler.com/2.0/?method="+ artistMethod +"&artist=" + artistName + "&api_key=cb12f4c4cc252eb5328201724e008ca4&format=json");
        try {
            var response = await url;
            result = await response.json();

            // console.log("repository: ", result.artist);

            return new Artist(result.artist);

        } catch (error) {
            return result;
        }
    },

    this.getTopAlbums = async function(artistName){
        var result = null;

        var url = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artistName + "&api_key=cb12f4c4cc252eb5328201724e008ca4&format=json&limit=5");

        try {
            var response = await url;
            result = await response.json();

            return result.topalbums.album.map(function(album){
                return album.name;
            });

        } catch (error) {
            return result;
        }
    }
};

