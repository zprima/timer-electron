const clockLabel = document.getElementById('clock')
const startBtn = document.getElementById('startBtn')
const pauseBtn = document.getElementById('pauseBtn')
const timer = document.getElementById('timer')
const startTime = document.getElementById('startTime')
const endTime = document.getElementById('endTime')

const interval = 1000;

let st = null;
let running = false;

function formatDate(date) {
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()

  return `${h}:${m}:${s}`
}

function formatUTCDate(date) {
  let h = date.getUTCHours()
  let m = date.getUTCMinutes()
  let s = date.getUTCSeconds()

  return `${h}:${m}:${s}`
}

function diffDate(a, b) {
  let diff = a.getTime() - b.getTime()
  return Math.abs(Math.round(diff))
}

setInterval(() => {
  let ct = new Date()
  clockLabel.innerHTML = formatDate(ct)

  if (running && st != null) {
    let diff = new Date(diffDate(ct, st))
    timer.innerText = formatUTCDate(diff)
  }
}, interval);

startBtn.addEventListener('click', (event) => {
  running = true
  st = new Date()
  startTime.innerHTML = formatDate(st)

  let et = new Date(st.getTime() + (8 * 60 * 60 * 1000))
  endTime.innerHTML = formatDate(et)
})

pauseBtn.addEventListener('click', (event) => {
  running = false
})