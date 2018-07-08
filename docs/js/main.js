"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var gameObject = (function () {
    function gameObject(game) {
        this.game = game;
        this.x = Math.random() * window.innerWidth - 100;
        this.y = -60;
        this.speedY = Math.random() * 2 + 2;
    }
    return gameObject;
}());
var Football = (function (_super) {
    __extends(Football, _super);
    function Football(game) {
        var _this = _super.call(this, game) || this;
        _this.sound = new Howl({
            src: ['kick.mp3']
        });
        _this.game = game;
        _this.htmlElement = document.createElement("football");
        document.body.appendChild(_this.htmlElement);
        console.log("Made the football in the document.");
        _this.htmlElement.addEventListener("mousedown", function () { return _this.clickHandler(); });
        return _this;
    }
    Football.prototype.move = function () {
        this.y += this.speedY;
        if (this.y + this.htmlElement.clientHeight > window.innerHeight) {
            var football = this.htmlElement;
            football.classList.add("fail");
            this.speedY = 0;
            this.game.fail(this);
        }
        this.draw();
    };
    Football.prototype.draw = function () {
        this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Football.prototype.clickHandler = function () {
        this.y -= 250;
        this.game.updateScore();
        this.sound.play();
    };
    Football.prototype.removeMe = function () {
        this.htmlElement.remove();
    };
    return Football;
}(gameObject));
var Game = (function () {
    function Game() {
        console.log("New game initialised");
        this.score = 0;
        this.scoreEl = document.getElementById("score");
        this.ballsEl = document.getElementById("balls");
        this.footballs = new Array();
        for (var index = 0; index < 5; index++) {
            this.footballs.push(new Football(this));
        }
        this.ballsEl.innerHTML = "Ballen:" + this.footballs.length;
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.footballs; _i < _a.length; _i++) {
            var football = _a[_i];
            football.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.fail = function (football) {
        var index = this.footballs.indexOf(football);
        this.footballs[index];
        this.footballs[index].removeMe();
        this.footballs.splice(index, 1);
        this.ballsEl.innerHTML = "Ballen:" + this.footballs.length;
        console.log('Football removed');
        if (this.footballs.length == 0) {
            var newElement = document.createElement('h1');
            newElement.innerText = "Helaas, je hebt gefaald.";
            var newButton = document.createElement('a');
            newButton.setAttribute("href", "game.html");
            newButton.innerText = "Opnieuw";
            document.getElementById('fail').appendChild(newElement);
            document.getElementById('fail').appendChild(newButton);
        }
    };
    Game.prototype.updateScore = function () {
        this.score++;
        this.scoreEl.innerHTML = "Score: " + this.score;
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map