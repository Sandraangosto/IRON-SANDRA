class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.internvalID = null;
  }


  start(callback) {
    this.internvalID = setInterval(() => {
      this,this.currentTime += 1;
    }, 1000)
  }

  getMinutes() {
    return Match.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Match.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if(value  < 10 ) {
      return "0" + value;
    }
    else {
      return '' + value;
    }

  }

  stop() {
    clearInterval(this.internvalID);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutos = this.computeTwoDigitNumber(this.getMinutes);
    let seconds = this.computeTwoDigitNumber(this,this.getSeconds);

    return `${minutos}${segundos}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
