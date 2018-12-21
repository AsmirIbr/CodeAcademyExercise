function GenerateArtist(name, method) {
    this.newArtist = [];

    this.name = name;
    this.method = method;
    
    var that = this;

    var options = {
        method: "GET",
        success: function (data) {

            that.newArtist.push(new Artist(data.artist));
            localStorage.setItem("Ceca", JSON.stringify(that.newArtist));
            console.log(that.newArtist);

        },
        url: "http://ws.audioscrobbler.com/2.0/?method="+ this.method +"&artist=" + this.name + "&api_key=cb12f4c4cc252eb5328201724e008ca4&format=json"
    }
    $.ajax(options);
    
    
}

GenerateArtist("Ceca", "artist.getinfo");
GenerateArtist("Maddona", "artist.getinfo");