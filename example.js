var subscribe = require('..');

var subscribeElement = document.querySelector('.subscribe-mouse-move');
var unsubscribeElement = document.querySelector('.unsubscribe-mouse-move');
var unsubscribe;

var x = document.querySelector('.x');
var y = document.querySelector('.y');

subscribe(subscribeElement, 'click', function() {
    unsubscribe = subscribe(document, 'mousemove', function(e) {
        x.value = e.pageX;
        y.value = e.pageY;
    });
    unsubscribeElement.style.display = '';
    subscribeElement.style.display = 'none';
});

subscribe(unsubscribeElement, 'click', function() {
    unsubscribe();
    subscribeElement.style.display = '';
    unsubscribeElement.style.display = 'none';
});