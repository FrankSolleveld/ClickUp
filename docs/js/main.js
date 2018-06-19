"use strict";
var Football = (function () {
    function Football(game) {
        var _this = this;
        this.game = game;
        this.htmlElement = document.createElement("football");
        document.body.appendChild(this.htmlElement);
        console.log("Made the football in the document.");
        this.htmlElement.addEventListener("mousedown", function () { return _this.clickHandler(); });
        this.x = Math.random() * window.innerWidth - 100;
        this.y = -60;
        this.speedY = Math.random() * 2 + 2;
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
    Football.prototype.clickHandler = function () {
        this.y -= 250;
    };
    Football.prototype.removeMe = function () {
        this.htmlElement.remove();
    };
    Football.prototype.draw = function () {
        this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Football;
}());
var Game = (function () {
    function Game() {
        console.log("New game initialised");
        this.footballs = new Array();
        for (var index = 0; index < 5; index++) {
            this.footballs.push(new Football(this));
        }
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
        this.footballs[index].removeMe();
        this.footballs.splice(index, 1);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map