class gameObject {

    protected htmlElement : HTMLElement
    protected  x : number
    protected  y : number

    speedY : number

    constructor(){



    }

    draw() : void {

        // Making sure the balls move.
        this.htmlElement.style.transform = "translate(" + this.x +"px, "+this.y+"px)"

    }

}