function PageRenderer() {
    this.renderAll = function () {
        var mainContainer = document.getElementById("main-container");

        mainContainer.appendChild(this.renderLeft());
        mainContainer.appendChild(this.renderRight());

        mainContainer.style.display = "flex";
    }

    this.renderLeft = function () {
        var leftContainer = document.createElement("div");
        leftContainer.style.width = "35%";
        leftContainer.style.display = "flex";
        leftContainer.style.flexDirection = "column";

        var profileContainer = document.createElement("div");
        var profileImage = document.createElement("img");
        profileImage.style.width = "200px";
        profileImage.style.height = "200px";
        profileImage.src = "catProfile.jpg";
        profileContainer.appendChild(profileImage);
//
        profileImage.addEventListener("mouseover", function (event) {
            event.target.style.width = "300px";
            event.target.style.height = "300px";
        });

        profileImage.addEventListener("mouseout", function (event) {
            event.target.style.width = "200px";
            event.target.style.height = "200px";
        });
//
        var aboutMeContainer = document.createElement("div");
        var aboutHeader = document.createElement("h1");
        aboutHeader.innerHTML = "My name is Kitty";

        var aboutText = document.createElement("p");
        aboutText.style.marginRight = "50px";
        aboutText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, earum facere dolorem recusandae voluptatem omnis, tempora tempore numquam corrupti eos minus distinctio reprehenderit repellendus hic est aut corporis sapiente dolor.";

        aboutMeContainer.appendChild(aboutHeader);
        aboutMeContainer.appendChild(aboutText);

        leftContainer.appendChild(profileContainer);
        leftContainer.appendChild(aboutMeContainer);

        return leftContainer;
    }

    this.renderRight = function () {
        var rightContainer = document.createElement("div");
        rightContainer.style.width = "60%";
        rightContainer.style.display = "flex";
        rightContainer.style.flexDirection = "column";


        var pictureContainer = document.createElement("div");
        rightContainer.appendChild(pictureContainer);

        for (var i = 0; i < 14; i++) {
            var picture = document.createElement("img");
            picture.src = "cat.jpg";
            picture.classList.add("image-style");
            pictureContainer.appendChild(picture);
//
            picture.addEventListener("mouseover", function (event) {
                event.target.style.width = "150px";
                event.target.style.height = "150px";
            });

            picture.addEventListener("mouseout", function (event) {
                event.target.style.width = "100px";
                event.target.style.height = "100px";
            });
//    
        }

        var storyContainer = document.createElement("div");
        rightContainer.appendChild(storyContainer);

        for (var j = 0; j < 3; j++) {
            var story = document.createElement("div");
            story.style.marginTop = "50px";

            var header = document.createElement("h1");
            header.innerHTML = "My story";
            var text = document.createElement("p");
            text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur aperiam praesentium, ratione hic rerum ipsa voluptate veniam quisquam illum amet labore atque placeat nisi corrupti, eligendi modi, soluta tempore.";
            var data = document.createElement("span");
            data.innerHTML = new Date();

            story.appendChild(header);
            story.appendChild(text);
            story.appendChild(data);

            storyContainer.appendChild(story);
        }





        return rightContainer;
    }
}