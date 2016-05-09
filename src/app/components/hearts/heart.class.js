export class Heart {
    constructor(size = 10, xPos = 10, yPos = 0, container) {
        // Publics
        this.size = size;
        this.xPos = xPos;
        this.yPos = yPos;
        this.container = container;
        this.velocity = Math.floor(Math.random() * (5 - 1) + 1);
    }

    create() {
        this.newHeart = document.createElement('div');
        this.newHeart.className = 'heart';
        this.newHeart.style.width = this.size + 'rem';
        this.newHeart.style.height = this.size + 'rem';
        this.newHeart.style.right = (this.xPos - 50) + 'px';

        this.container.appendChild(this.newHeart);

        return this;
    }

    move() {
        this.yPos -= this.velocity;
        this.newHeart.style.transform = "translateY(" + Math.floor(this.yPos) + 'px)';
    }

    reset() {
        this.yPos = 800;
        this.newHeart.style.transform = "translateY(" + Math.floor(this.yPos) + "px)";
    }
}
