/// <reference  path="gameObject.ts"/>
class Football extends gameObject {

    // Creating Element and defining x and y
    htmlElement : HTMLElement

    // Defining sound property
    private sound:any

  

    constructor(game:Game){
        super(game)

        this.sound = new Howl({
            src:['kick.mp3']
        })

        this.game = game

       this.htmlElement = document.createElement("football")

       // Make the HTML Element for the football.
        document.body.appendChild(this.htmlElement)
        console.log("Made the football in the document.")

        // Here we add a click event on the football.
        this.htmlElement.addEventListener("mousedown",()     => this.clickHandler())

    }

    move() : void {

        // Here the movements are calculated. The ball is just falling.
        this.y += this.speedY

        // console.log(this.y)

        // If football goes to the ground, game over. This counts for the clientHeight as well for the regular y variable.
        if(this.y + this.htmlElement.clientHeight > window.innerHeight) {

            let football = this.htmlElement;
            football.classList.add("fail");

            // console.log(football)

            this.speedY = 0
            // this.speedX = 0

            this.game.fail(this)
        
        }
        
        // Move function is called. This function is defined at the bottom of the file.
        this.draw()
    }

    draw() : void {

        // Making sure the balls move.
        this.htmlElement.style.transform = "translate(" + this.x +"px, "+this.y+"px)"

    }


    clickHandler(){
        this.y -= 250 // zet 250 pixels omhaag
        this.game.updateScore()
        this.sound.play()
    }

    removeMe() {
        this.htmlElement.remove()
    }


 
}