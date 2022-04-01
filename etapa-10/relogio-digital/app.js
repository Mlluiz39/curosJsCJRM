const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()
 
const clockHTML = `
<div class="card">
  <span>${String(hours).length === 1 ? `0${hours}` : hours}</span>
  <div class="card-body">
   <p>Horas</p>
  </div>
</div> 
<div class="card">
  <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span>
  <div class="card-body">
   <p>Minutos</p>
  </div>
</div>
<div class="card">
  <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
  <div class="card-body">
   <p>Segundos</p>
  </div>
</div>`

clockContainer.innerHTML = clockHTML
}
setInterval(updateClock, 1000)
