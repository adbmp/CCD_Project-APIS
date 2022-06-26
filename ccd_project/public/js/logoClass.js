class logo {
    constructor(icon, txt) {
        this.icon = icon;
        this.txt = txt;
    }

    bgColor(box) {
        box.background(255);
    }

    logoMaker(box){  
        loadImage(this.icon.url, img => {
            box.image(
                img,
                this.icon.posX,
                this.icon.posY,
                this.icon.width * (this.icon.width/this.icon.heigth),
                this.icon.heigth
            );
        });

        fill(0);
        textSize(100);
        box.text(
            this.txt.str,
            this.txt.posX,
            this.txt.posY,
        );
}
}