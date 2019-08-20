const countdown = document.querySelector(".countdown");

// set launch date
const launchDate = new Date("September 15, 2019 00:00:00").getTime()

const intvl = setInterval(() => {
  // get today's date and time in ms
  const now = new Date().getTime();

  //calculate the remaining time
  const distance = launchDate - now;

  //convert ms in days, hours, mins, secs
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const secs = Math.floor((distance % (1000 * 60)) / (1000))

  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${secs}<span>Seconds</span></div>
  `

  // check if the launch date is due
  if(distance < 0) {
    //stop countdown
    clearInterval(intvl)

    countdown.style.color = '#17A2B8';
    countdown.innerHTML = `Launched!`
  }
}, 1000)
