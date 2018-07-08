# Click Up!


## Play
#### How to play?
Kan jij een beetje hooghouden? Bewijs het door middel van deze game! Klik op de ballen om zoveel mogelijk punten te verzamelen. Er zullen vijf ballen verschijnen, krijg jij ze allemaal hoog?

### Live demo
[Speel ClickUp nu op mijn eigen domein.](http://www.ikbenfrank.ml/ClickUp/docs)

### Installatie
Wil je het project lokaal spelen of de sourcecode bekijken? Clone de repository en run het project via je localhost. Ga naar localhost/.../docs om het spel te spelen.

## Checklist
- [x] Startscherm
- [x] Eindscherm
- [x] Er zijn geen bugs

## Toelichting OOP

### Classes
Classes gebruik je om dingen in je game wereld te krijgen. Mijn game maakt gebruik van voornamelijk twee classes. Game en Football. Football zit in de Game. Om er voor te zorgen dat, als er nieuwe items toegevoegd worden, hebben we een GameObject gemaakt die de eigenschappen beheerd van x en y.

```
class Football {
     // Creating Element and defining x and y
    htmlElement : HTMLElement
    x : number
    y : number

    // Defining Speed as a number
    //speedX : number
    speedY : number
}
```

### Encapsulation
Bij Encapsulation gaat het erom dat je je waardes beveiligd indien nodig. Standaard zijn je waardes public. Dit houdt in dat de eindgebruiker ook toegang heeft tot die waardes. Soms is het handiger als alleen een bepaalde class toegang heeft tot bijvoorbeeld de snelheid van de bal. Dan zet je je waarde op private. Ook is het mogelijk om vie Inheritance je waarde beveiligd te houden. Dit gaat via protected. Zie onderstaand stukje code. Het is kleiner gemaakt omdat het niet handig is om heel die class hier in te zetten. Het gaat om het stukje van het geluid. Via Howler kunnen we gemakkelijk geluid afspelen in het spel. Zodra je op een bal klikt, hoor je een trap van de bal. Ik wil dat alleen deze class toegang heeft tot deze waardes. Daarom staat sound op private.

```
class Football extends gameObject {

    // Defining sound property
    private sound:any

    constructor(game:Game){
        super()

        this.sound = new Howl({
            src:['kick.mp3']
        })

        this.game = game
    }
}
```

### Composition
Composition wordt gebruikt wanneer je classess aanroept in andere classess. Zo roep ik in mijn class Game een nieuwe voetbal aan. Zie onderstaand stukje code. Er worden vijf voetballen gemaakt.

```
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

```


### Inheritance


```

```

## Klassendiagram
![diagram](https://i.imgur.com/aU1Sf8m.jpg)

## Peer review
[Review op de game van Charlene](https://github.com/Charlenedewaard/Game_Gudetama/issues/1)

## Extra uitdagingen
- Extra library Howler.js voor geluid in de game, wordt nog geïmplementeerd.