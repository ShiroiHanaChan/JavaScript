// Namespacing .Game
let BubbleShoot = window.BubbleShoot || {};

// IIFE
BubbleShoot.Game = (function() {
    let Game = function(){
        // Public method init
        this.init = function() {
            // Private method startGame
            let startGame = function () {
                console.log('Hi');
            };
            document.querySelectorAll(".but_start_game").forEach(function (element) {
                element.addEventListener('click', startGame, false);
            });
        }
    };
    return Game;
})();