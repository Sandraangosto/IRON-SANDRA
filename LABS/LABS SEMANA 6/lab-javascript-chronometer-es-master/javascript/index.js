const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');


function printTime() {
  let segundos = printSeconds();

  let minutos = printMinutes();

  secUniElement.innerText= segundos[0];
  secDecElement.innerText= segundos [1];
}
  

function printMinutes() {
  return  chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {
  return  chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLITS'
  btnRightElement.className = 'btn splits'
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET'
  btnRightElement.className = 'btn resets'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === "START") {
    setStopBtn();

    printTime();

    chronometer.start();

  }
  
  else {
    setStartBtn();
    
    setResetBtn();

    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
});
