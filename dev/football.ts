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

        // Here we add a click event on the football.
        this.htmlElement.addEventListener("mouseover",()     => this.mouseoverHandler())

        // We give X and Y stativ values and randomize this later on.
        this.x = 3
        this.y = 6

        // Randomizing the position of the football.
        this.speedX = Math.random() * 2 + 1
        this.speedY = Math.random() * 2 + 2
    }

    move() : void {

        // Here the movements are calculated.
        this.x += this.speedX
        this.y += this.speedY

      
        // If football goes to the ground, game over. This counts for the clientHeight as well for the regular y variable.
        if(this.y + this.htmlElement.clientHeight > window.innerHeight || this.y < 0) {

            let football = this.htmlElement;
            football.classList.add("fail");

            console.log(football)

            this.speedY = 0
            this.speedX = 0
        
        }
        
        // Move function is called. This function is defined at the bottom of the file.
        this.draw()
    }

    mouseoverHandler(){
        this.htmlElement.remove()
        this.game.fail(this)
    }


    draw() : void {

        // Making sure the balls move.
        this.htmlElement.style.transform ="translate("+this.x+"100px, "+this.y+"100px)"

    }
}