let BubbleShoot = window.BubbleShoot || {};

// IIFE
BubbleShoot.ui = (function() {
    let ui = {
        init: function() {

        },
        hideDialog: function() {
            // May need a nodeList
            let dialogBox = document.querySelectorAll('.dialog');
            dialogBox.style.transition = 'opacity 300ms';
            dialogBox.style.opacity = '0';
            setTimeout(function(dialogBox) {
                dialogBox.style.display = 'none';
            }, 300); // Sets display none; after 300ms
        }
    }
    return ui;
})();