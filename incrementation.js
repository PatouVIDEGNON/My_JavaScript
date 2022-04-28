console.log('Incrementation');
let increment = 0;
let span = document.querySelector('span');
let button = document.querySelector('button');

button.addEventListener('click', function () {
increment++;
span.innerHTML = increment;
})
