const moment = require('moment')

const clockLabel = document.getElementById('clock')
const startBtn = document.getElementById('startBtn')
const pauseBtn = document.getElementById('pauseBtn')
const timer = document.getElementById('timer')
const startTime = document.getElementById('startTime')
const endTime = document.getElementById('endTime')

const interval = 1000;

let st = null;
let running = false;


setInterval(() => {
  let ct = new Date().getTime()
  clockLabel.innerHTML = moment(ct).format('HH:mm:ss')

  if (running && st != null) {
    let diffTime = ct - st;
    console.log(diffTime)

    let duration = moment.duration(diffTime, 'milliseconds');
    let x = `${duration.hours()}:${duration.minutes()}:${duration.seconds()}`
    timer.innerHTML = x
  }
}, interval);

startBtn.addEventListener('click', (event) => {
  running = true
  st = new Date().getTime()
  startTime.innerHTML = moment(st).format('HH:mm:ss')
  let et = st + (8 * 60 * 60 * 1000)
  endTime.innerHTML = moment(et).format('HH:mm:ss')
})

pauseBtn.addEventListener('click', (event) => {
  running = false
})