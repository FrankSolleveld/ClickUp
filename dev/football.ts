class Football {

    // Creating Element and defining x and y
    htmlElement : HTMLElement
    x : number
    y : number

    // Defining Spped as a number
    speedX : number
    speedY : number

    // Making a private instance of game which is untouchable by the user.
    private game : Game

    constructor(game:Game){
        this.game = game

       this.htmlElement = document.createElement("football")

       // Make the HTML Element for the football.
        document.body.appendChild(this.htmlElement)
        console.log("Made the football in the document.")

        // Here we add a click event on the football.
        this.htmlElement.addEventListener("click",()     => this.clickHandler())

        // We give X and Y stativ values and randomize this later on.
        this.x = 3
        this.y = 60

        // Randomizing the position of the football.
        this.speedX = Math.random() * 2 + 1
        this.speedY = Math.random() * 2 + 2
    }

    move() : void {

        // Here the movements are calculated. The ball is just falling.
        this.y += this.speedY

        // console.log(this.y)

        // If football goes to the ground, game over. This counts for the clientHeight as well for the regular y variable.
        if(this.y + this.htmlElement.clientHeight > window.innerHeight || this.y < 0) {

            let football = this.htmlElement;
            football.classList.add("fail");

            // console.log(football)

            this.speedY = 0
            this.speedX = 0

            this.game.fail(this)
        
        }
        
        // Move function is called. This function is defined at the bottom of the file.
        this.draw()
    }

    clickHandler(){
        this.y -= this.speedY + 250
    }


    draw() : void {

        // Making sure the balls move.
        this.htmlElement.style.transform = "translate(" + this.x +"px, "+this.y+"px)"

    }
}