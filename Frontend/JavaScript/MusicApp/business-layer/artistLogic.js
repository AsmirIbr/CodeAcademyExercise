import {ArtistRepository} from "/repositories/artistRepository.js";
import {AlbumRepository} from "/repositories/albumRepository.js";

export function ArtistLogic() {
    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository();
    
    this.getArtistPageData = async function(artistName) {
        var artist =  await this.artistRepo.getArtist(artistName);
        var topAlbums = await this.artistRepo.getTopAlbums(artistName);
        var albums = await this.albumRepo.getAlbums(artistName, topAlbums);

        var pageData = {
            artist: artist,
            albums: albums,
        }
        return pageData;
    }
}