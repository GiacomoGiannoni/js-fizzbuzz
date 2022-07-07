const containerDom = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizzBuzz');
        containerDom.innerHTML += "<div class= 'box-fizzbuzz'>FizzBuzz</div>";
    } else if (i % 3 == 0) {
        console.log('fizz');
        containerDom.innerHTML += "<div class= 'box-fizz'>Fizz</div>";
    } else if (i % 5 == 0) {
        console.log('Buzz');
        containerDom.innerHTML += "<div class= 'box-buzz'>Buzz</div>";
    } else {
        console.log(i);
        containerDom.innerHTML += "<div class= 'box'>" + i + "</div>";
    }
};