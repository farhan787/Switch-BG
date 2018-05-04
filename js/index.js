document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;
document.getElementById('redButton').onclick = switchRed;
document.getElementById('orangeButton').onclick = switchOrange;

function switchGray() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'gray'; 
  document.getElementsByTagName('body')[0].style.color = 'white'; 
}

function switchWhite() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}

function switchBlue() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'blue'; 
  document.getElementsByTagName('body')[0].style.color = 'white'; 
}
function switchOrange() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'orange'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}
function switchYellow() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}

function switchRed() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'tomato'; 
  document.getElementsByTagName('body')[0].style.color = 'white'; 
}
