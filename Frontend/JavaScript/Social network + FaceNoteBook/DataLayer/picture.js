function Picture(name) {
    this.picture = name;
    this.text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita quo, nulla iste qui quibusdam aut illo assumenda quos repellat quia dolore mollitia, asperiores nam quidem error repellendus sunt accusantium.";
    this.random = getRandom(1, 5);
    switch(this.random){
        case 1:
        this.link = "img/cat1.jpg";
        break;
        case 2:
        this.link = "img/cat2.jpg";
        break;
        case 3:
        this.link = "img/cat3.jpg";
        break;
        case 4:
        this.link = "img/cat4.jpg";
        break;
        case 5:
        this.link = "img/cat.jpg";
        break;
      
    }
}