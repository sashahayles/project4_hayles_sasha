

var i = 0;
var txt = 'Welcome. This website is dedicated to Elephants.';

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName('js-typewrite')[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 65);
  }
}

setTimeout(typeWriter, 1000);
