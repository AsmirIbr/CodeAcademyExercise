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
        pictureContainer.style.display = "flex";
        pictureContainer.style.flexWrap = "wrap";
        rightContainer.appendChild(pictureContainer);

// Updated

        var addPicture = document.createElement("img");
        addPicture.classList.add("image-style");
        addPicture.src = "img/add.jpg"
        pictureContainer.appendChild(addPicture);

        addPicture.addEventListener("click", function () {

            var addPicturePopUp = document.createElement("div");
            addPicturePopUp.classList.add("addPopUpClass");
            rightContainer.appendChild(addPicturePopUp)

            var addFromFile = document.createElement("div");
            addFromFile.classList.add("add-div");
            addPicturePopUp.appendChild(addFromFile)

            var fileImg = document.createElement("div");
            fileImg.style.background = "rgba(209, 207, 207, 0.9)";
            fileImg.style.cursor = "pointer";
            fileImg.style.display = "flex";
            fileImg.style.alignItems = "center"
            fileImg.style.height = "100%";
            fileImg.style.width = "100%";
            addFromFile.appendChild(fileImg);

            var text = document.createElement("span");
            text.innerHTML = "<b> +  Upload Photo </b>";
            text.style.width = "100%"
            fileImg.appendChild(text);

            var addInput = document.createElement("input");
            addInput.id = "inputId"
            addInput.type = "file";
            addInput.accept = "image/png, image/jpeg";
            addInput.classList.add("add-input");
            addFromFile.appendChild(addInput);

            addInput.addEventListener("change", function () {
                if (this.files && this.files[0]) {

                    var newImgDiv = document.createElement("div");
                    newImgDiv.classList.add("image-style");
                    pictureContainer.appendChild(newImgDiv);

                    var newImg = document.createElement("img");
                    newImg.classList.add("image-style");
                    newImg.src = URL.createObjectURL(this.files[0]);
                    newImgDiv.appendChild(newImg);

                    var removeImg = document.createElement("div");
                    removeImg.classList.add("remove-img");
                    newImgDiv.appendChild(removeImg);

                    var deleteX = document.createElement("img");
                    deleteX.src = "img/x.png";
                    deleteX.style.height = "100%";
                    deleteX.style.width = "100%";
                    removeImg.appendChild(deleteX);

                    deleteX.addEventListener("click", function (event) {
                        var parent = event.target.parentNode;
                        var removePhoto = parent.parentNode;
                        removePhoto.parentNode.removeChild(removePhoto);
                    })
                }
            })

            var addViaUrl = document.createElement("div");
            addViaUrl.classList.add("add-div");
            addViaUrl.style.background = "rgba(209, 207, 207, 0.9)";
            addPicturePopUp.appendChild(addViaUrl)

            var getUrl = document.createElement("input");
            getUrl.type = "text";
            getUrl.style.width = "80%"
            getUrl.style.marginTop = "20%"
            getUrl.placeholder = "Enter image URL"
            addViaUrl.appendChild(getUrl);

            var submit = document.createElement("input");
            submit.type = "submit";
            submit.style.marginTop = "5px"
            addViaUrl.appendChild(submit);

            submit.addEventListener("click", function () {
                var newImgDiv = document.createElement("div");
                newImgDiv.classList.add("image-style");
                pictureContainer.appendChild(newImgDiv);

                var newImg = document.createElement("img");
                newImg.classList.add("image-style");
                newImg.src = getUrl.value;
                newImgDiv.appendChild(newImg);

                var removeImg = document.createElement("div");
                removeImg.classList.add("remove-img");
                newImgDiv.appendChild(removeImg);

                var deleteX = document.createElement("img");
                deleteX.src = "img/x.png";
                deleteX.style.height = "100%";
                deleteX.style.width = "100%";
                removeImg.appendChild(deleteX);

                deleteX.addEventListener("click", function (event) {
                    var parent = event.target.parentNode;
                    var removePhoto = parent.parentNode;
                    removePhoto.parentNode.removeChild(removePhoto);
                })
            })

            var exit = document.createElement("div");
            exit.classList.add("exit1");
            addPicturePopUp.appendChild(exit);

            var exitX = document.createElement("img");
            exitX.src = "img/x.png";
            exitX.style.height = "100%";
            exitX.style.width = "100%";
            exit.appendChild(exitX);

            exit.addEventListener("click", function () {
                addPicturePopUp.parentNode.removeChild(addPicturePopUp);
            })
        })
///
        for (var i = 0; i < this.userData.album.length; i++) {

            var pictureDiv = document.createElement("div");
            pictureDiv.classList.add("image-style");
            pictureContainer.appendChild(pictureDiv);

            var picture = document.createElement("img");
            picture.src = this.userData.album[i].link;
            picture.id = i;
            picture.classList.add("image-style");
            pictureDiv.appendChild(picture);
//Updated
            var removeImg = document.createElement("div");
            removeImg.classList.add("remove-img");
            pictureDiv.appendChild(removeImg);

            var deleteX = document.createElement("img");
            deleteX.src = "img/x.png";
            deleteX.style.height = "100%";
            deleteX.style.width = "100%";
            removeImg.appendChild(deleteX);

            deleteX.addEventListener("click", function (event) {
                var parent = event.target.parentNode;
                var removePhoto = parent.parentNode;
                removePhoto.parentNode.removeChild(removePhoto);
            })
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
//Updated
            var storyContainer = document.createElement("div");
            storyContainer.style.display = "flex";
            storyContainer.style.flexDirection = "column";
            rightContainer.appendChild(storyContainer);

            var addNewStory = document.createElement("div");
            addNewStory.classList.add("new-story")
            storyContainer.appendChild(addNewStory);

            var addNewHeader = document.createElement("input");
            addNewHeader.type = "text";
            addNewHeader.style.height = "50px";
            addNewHeader.style.fontSize = "18px";
            addNewHeader.placeholder = "Enter header text";
            addNewHeader.style.margin = "5px";
            addNewStory.appendChild(addNewHeader);

            var addNewParagraph = document.createElement("input");
            addNewParagraph.type = "text";
            addNewParagraph.style.height = "100px";
            addNewParagraph.style.fontSize = "20px";
            addNewParagraph.placeholder = "Enter your story";
            addNewParagraph.style.margin = "5px"
            addNewStory.appendChild(addNewParagraph);

            var addNewData = document.createElement("span");
            addNewData.innerText = "";
            addNewStory.appendChild(addNewData);

            var addNewSubmit = document.createElement("button");
            addNewSubmit.innerText = "Post";
            addNewStory.appendChild(addNewSubmit);

            addNewSubmit.addEventListener("click", function () {
                var story = document.createElement("div");
                story.style.order = "0";
                story.style.marginTop = "50px";

                var header = document.createElement("h1");
                header.innerHTML = addNewHeader.value;

                var text = document.createElement("p");
                text.innerHTML = addNewParagraph.value;

                var data = document.createElement("span");
                data.innerHTML = new Date();

                var button = document.createElement("button");
                button.classList.add("button");
                button.innerHTML = "Remove"

                button.addEventListener("click", function (event) {
                    var removeStory = event.target.parentNode;
                    removeStory.parentNode.removeChild(this.parentNode);
                });

                story.appendChild(header);
                story.appendChild(text);
                story.appendChild(data);
                story.appendChild(button);

                storyContainer.appendChild(story);


            })
        
//
            for (var j = 0; j < this.userData.stories.length; j++) {
                var story = document.createElement("div");
                story.style.order = "10"
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
