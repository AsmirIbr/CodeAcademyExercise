import { ArtistLogic } from "/business-layer/artistLogic.js";
import * as jquery from "/jQuery.js";
moment.locale("mk");

export function RenderArtist() {
    this.artistPageData = new ArtistLogic();
    this.artistData = {};


    this.renderAll = async function (hash) {
        this.artistName = hash;
        this.artistData = await this.artistPageData.getArtistPageData(this.artistName);


        var $main = $("#main-wrapper").append(this.renderAlbum());
        $("<div>").addClass("main-div").appendTo($main).append(this.renderTop()).append(this.renderBottom()).append(this.renderBio()).parent();
        $("#loader").css("display", "none");

    }

    this.renderTop = function () {
        var $top = $("<div>").addClass("top-div");

        var $left = $("<div>").addClass("left-top-div").appendTo($top);
        $("<h1>").addClass("name-div").appendTo($left).text(this.artistData.artist.name)
        $("<img>").addClass("image-div").appendTo($left).attr("src", " " + this.artistData.artist.image + "");

        var $right = $("<div>").addClass("right-div").appendTo($top);
        $("<h4>").text("Similar").css("color", "rgba(248, 36, 36, 0.836)").appendTo($right);

        var $similarDiv = $("<div>").appendTo($right);

        for (var i = 0; i < this.artistData.artist.similar.artist.length; i++) {

            var $lineSimilar = $("<div>").appendTo($similarDiv).addClass("similar-line");
            $("<img>").appendTo($lineSimilar).attr("src", this.artistData.artist.similar.artist[i].image[1]["#text"]);
            $("<a>").appendTo($lineSimilar).html(this.artistData.artist.similar.artist[i].name).attr("href", this.artistData.artist.similar.artist[i].name).on("click", (event) => {
                event.preventDefault();
                $("#main-wrapper").html("");

                $("#loader").css("display", "flex");
                this.renderAll(event.target.text)

            });
        }
        return $top;
    }

    this.renderBottom = function () {
        var $bottom = $("<div>").addClass("bottom-div")

        var $first = $("<div>").appendTo($bottom).addClass("first-bottom");
        var $leftBottom = $("<div>").appendTo($first);
        $("<span>").appendTo($leftBottom).html("Listeners: " + this.artistData.artist.stats.listeners);
        $("<span>").appendTo($leftBottom).html("Playcount:: " + this.artistData.artist.stats.playcount);

        var $rightBottom = $("<div>").appendTo($bottom).addClass("rightBottom");
        $("<span>").appendTo($rightBottom).text("TAGS: ")

        for (var i = 0; i < this.artistData.artist.tags.tag.length; i++) {
            $("<a>").appendTo($rightBottom).html(this.artistData.artist.tags.tag[i].name).attr("href", "#" + this.artistData.artist.tags.tag[i].url).attr({ "target": "_blank" });
        }

        return $bottom;
    }

    this.renderBio = function () {
        var $bio = $("<div>").addClass("bio-div");

        $("<div>").appendTo($bio).html(this.artistData.artist.bio.summary);
        $("<div>").appendTo($bio).html(this.artistData.artist.bio.content);
        $("<span>").appendTo($bio).html(moment(this.artistData.artist.bio.date).format('LL'));

        return $bio;
    }

    this.renderAlbum = function () {
        var $albums = $("<div>").addClass("album-div")
        $("<h3>").appendTo($albums).html("Top Albums").css("padding", "15px");
        for (var i = 0; i < this.artistData.albums.length; i++) {
            var $albumLine = $("<div>").appendTo($albums);

            var $bla = $("<div>").addClass("album-line").appendTo($albumLine).css("display", "flex")
            $("<img>").appendTo($bla).attr("src", this.artistData.albums[i].image).css("cursor", "pointer").on("click", (event) => {
                console.log("ssss ", event.target)
                $(event.target).parent().siblings().css("display", "flex")
            });

            $("<h4>").appendTo($bla).html(i + ":" + this.artistData.albums[i].name).css("cursor", "pointer").on("click", (event) => {
                console.log("ssss ", event.target)
                $(event.target).parent().siblings().css("display", "flex")
            });

            for (var j = 0; j < this.artistData.albums[i].tracks.track.length; j++) {

                $("<div>").addClass("render-tracks").appendTo($albumLine).html(this.artistData.albums[i].tracks.track[j].name).css("display", "none");
            }
        }
        return $albums;
    }
}