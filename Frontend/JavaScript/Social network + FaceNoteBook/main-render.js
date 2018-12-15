function PageRenderer(data) {
    this.userData = data;
    this.renderAll = function () {

        var mainContainer = document.getElementById("main-container");
        mainContainer.classList.add("mainContainer")

        mainContainer.appendChild(this.renderLeft());
        mainContainer.appendChild(this.renderRight());

    }

    this.renderLeft = function () {
        var leftContainer = document.createElement("div");
        leftContainer.classList.add("leftContainer");

        var profileContainer = document.createElement("div");

        var profileImage = document.createElement("img");
        profileImage.classList.add("profileImg");
        profileImage.src = this.userData.profilePicture.link;
        profileContainer.appendChild(profileImage);

        profileImage.addEventListener("mouseover", function (event) {
            event.target.style.width = "300px";
            event.target.style.height = "300px";
        });

        profileImage.addEventListener("mouseout", function (event) {
            event.target.style.width = "200px";
            event.target.style.height = "200px";
        });

        var aboutMeContainer = document.createElement("div");
        var aboutName = document.createElement("h1");
        aboutName.innerHTML = this.userData.name;

        var aboutHeader = document.createElement("h3");
        aboutHeader.innerHTML = this.userData.biography.header;

        var aboutText = document.createElement("p");
        aboutText.style.marginRight = "50px";
        aboutText.innerHTML = this.userData.biography.paragraph;

        aboutMeContainer.appendChild(aboutName);
        aboutMeContainer.appendChild(aboutHeader);
        aboutMeContainer.appendChild(aboutText);

        leftContainer.appendChild(profileContainer);
        leftContainer.appendChild(aboutMeContainer);

        return leftContainer;
    }

    this.renderRight = function () {
        var rightContainer = document.createElement("div");
        rightContainer.classList.add("rightContainer");

        var pictureContainer = document.createElement("div");
        rightContainer.appendChild(pictureContainer);

        for (var i = 0; i < this.userData.album.length; i++) {

            var picture = document.createElement("img");
            picture.src = this.userData.album[i].link;
            picture.id = i;
            picture.classList.add("image-style");
            pictureContainer.appendChild(picture);
            //
            // picture.addEventListener("mouseover", function (event) {
            //     event.target.style.width = "150px";
            //     event.target.style.height = "150px";
            // });

            // picture.addEventListener("mouseout", function (event) {
            //     event.target.style.width = "100px";
            //     event.target.style.height = "100px";
            // });

            var that = this;

            picture.addEventListener("click", function (event) {

                var popUp = document.createElement("div");
                popUp.classList.add("popUpClass");

                var image = document.createElement("img");
                image.src = that.userData.album[event.target.id].link;
                popUp.id = event.target.id;
                image.style.height = "100%";
                image.style.width = "100%";
                image.style.objectFit = "contain";

                var before = document.createElement("div");
                before.classList.add("before");
                var arrowLeft = document.createElement("img");
                arrowLeft.src = "img/arrowLeft.png";
                arrowLeft.style.height = "100%";
                arrowLeft.style.width = "100%";

                before.appendChild(arrowLeft);

                before.addEventListener("click", function () {

                    image.src = that.userData.album[popUp.id--].link;

                    if (popUp.id < 0) {
                        return popUp.id = that.userData.album.length - 1;
                    }

                    return image.src;
                })


                var after = document.createElement("div");
                after.classList.add("after");

                var arrowRight = document.createElement("img");
                arrowRight.src = "img/arrowRight.png";
                arrowRight.style.height = "100%";
                arrowRight.style.width = "100%";

                after.appendChild(arrowRight);

                after.addEventListener("click", function () {

                    image.src = that.userData.album[popUp.id++].link;
                    var last = that.userData.album.length - 1;

                    if (popUp.id > last) {
                        return popUp.id = 0;
                    }
                    return image.src;
                });

                var exit = document.createElement("div");
                exit.classList.add("exit");

                var exitX = document.createElement("img");
                exitX.src = "img/x.png";
                exitX.style.height = "100%";
                exitX.style.width = "100%";

                exit.appendChild(exitX);

                exit.addEventListener("click", function () {
                    popUp.parentNode.removeChild(popUp);
                })

                popUp.appendChild(exit);
                popUp.appendChild(after);
                popUp.appendChild(before);
                popUp.appendChild(image);

                rightContainer.appendChild(popUp)
            });
        }

        var storyContainer = document.createElement("div");
        rightContainer.appendChild(storyContainer);

        for (var j = 0; j < this.userData.stories.length; j++) {
            var story = document.createElement("div");
            story.id = j;
            story.style.marginTop = "50px";

            var header = document.createElement("h1");
            header.innerHTML = this.userData.stories[j].header;

            var text = document.createElement("p");
            text.innerHTML = this.userData.stories[j].paragraph;

            var data = document.createElement("span");
            data.innerHTML = this.userData.stories[j].newData;

            var button = document.createElement("button");
            button.classList.add("button");
            button.innerHTML = "Remove"

            button.addEventListener("click", function (event) {
                var removeStory = event.target.parentNode
                removeStory.parentNode.removeChild(this.parentNode);
            });

            story.appendChild(header);
            story.appendChild(text);
            story.appendChild(data);
            story.appendChild(button);

            storyContainer.appendChild(story);


        }





        return rightContainer;
    }
}