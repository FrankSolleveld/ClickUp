class Game {

    // Set the balls in an array
    footballs : Array<Football>
    
    constructor() {
        console.log("New game initialised")
        
        // Footballs are placed inside an array.
        this.footballs = new Array()
        for (let index = 0; index < 3; index++) {

                // Makes sure only 3 balls will fall.
                this.footballs.push(new Football(this))
            
        }

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

        this.footballs[index].removeMe()
        
        this.footballs.splice(index , 1)

    }
}

window.addEventListener("load", () => new Game())
// on load page the game starts.
