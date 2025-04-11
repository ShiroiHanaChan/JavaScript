let item2 = document.querySelector('#two');

item2.setAttribute('class', 'cool');

if (item2.hasAttribute('class'))
    console.log(item2.getAttribute('class'));

item2.removeAttribute('class');