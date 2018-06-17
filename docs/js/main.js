"use strict";
var Football = (function () {
    function Football(game) {
        var _this = this;
        this.game = game;
        this.htmlElement = document.createElement("football");
        document.body.appendChild(this.htmlElement);
        this.htmlElement.addEventListener("mouseover", function () { return _this.mouseoverHandler(); });
        this.x = 3;
        this.y = 6;
        this.speedX = Math.random() * 2 + 1;
        this.speedY = Math.random() * 2 + 2;
    }
    Football.prototype.move = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y + this.htmlElement.clientHeight > window.innerHeight || this.y < 0) {
            var football = this.htmlElement;
            football.classList.add("fail");
            console.log(football);
            this.speedY = 0;
            this.speedX = 0;
        }
        this.draw();
    };
    Football.prototype.mouseoverHandler = function () {
        this.htmlElement.remove();
        this.game.fail(this);
    };
    Football.prototype.draw = function () {
        this.htmlElement.style.transform = "translate(" + this.x + "100px, " + this.y + "100px)";
    };
    return Football;
}());
var Game = (function () {
    function Game() {
        console.log("New game initialised");
        this.footballs = new Array();
        for (var index = 0; index < 3; index++) {
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
        this.footballs.splice(index, 1);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map