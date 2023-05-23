class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.internvalID = null;
  }


  start(callback) {
    this.internvalID = setInterval(() => {
      this.currentTime ++;
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
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
    let minutos = this.computeTwoDigitNumber(this.getMinutes());
    let segundos = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutos}${segundos}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
