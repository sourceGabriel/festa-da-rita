var i = 0;
var iMid = 0;
var iEnd = 0;
var text = `Pediu uma boa desculpa pra encher a cara ?`;
var textMid = `AQUI TA ELA PORRA!`;
var speed = 170;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("start").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (iMid < textMid.length) {
    document.getElementById("mid").innerHTML += textMid.charAt(iMid);
    iMid++;
    setTimeout(typeWriter, speed);
  }
}

document.getElementById("start").onload = typeWriter();
