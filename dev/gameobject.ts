class gameObject {

    protected  x : number
    protected  y : number

    speedY : number

    // Making a private instance of game which is untouchable by the user.
    protected game : Game

    constructor(game:Game){

        this.game = game

        // We give X and Y stativ values and randomize this later on.
        this.x = Math.random() * window.innerWidth - 100
        this.y = -60

        // Randomizing the position of the football.
        //this.speedX = Math.random() * 2 + 1
        this.speedY = Math.random() * 2 + 2


    }

}