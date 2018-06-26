class Game {

    // Set the balls in an array
    public footballs : Array<Football>
    private score : number

    private scoreEl : HTMLElement | any
    private ballsEl : HTMLElement | any
    
    constructor() {
        console.log("New game initialised")
        this.score = 0

        this.scoreEl = document.getElementById("score")
        this.ballsEl = document.getElementById("balls")
        
        // Footballs are placed inside an array.
        this.footballs = new Array()
        for (let index = 0; index < 5; index++) {

                // Makes sure only 3 balls will fall.
                this.footballs.push(new Football(this))
            
        }

        this.ballsEl.innerHTML = "Ballen:" + this.footballs.length

        this.gameLoop()
    }

    gameLoop() : void {
    
        for (let football of this.footballs){

            // This lets the balls move.
            football.move()

        }

        // 60 frames per second.
        requestAnimationFrame( () => this.gameLoop() )
    }

    public fail(football : Football) {
        
        // Removing the football from the array of footballs
        // Splicing
        let index = this.footballs.indexOf(football)

        this.ballsEl.innerHTML = "Ballen:" + this.footballs.length
        this.footballs[index].removeMe()
            
        this.footballs.splice(index , 1)

    }

    public updateScore(){
        this.score++
        this.scoreEl.innerHTML = "Score: " + this.score
    }
}

window.addEventListener("load", () => new Game())
// on load page the game starts.
