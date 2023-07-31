const speedElement = document.querySelector("#speed")
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")

let watchID = null
startBtn.addEventListener("click", () => {
  if (watchID)
      return

  function handleSuccess(position) {
    console.log(position)
    speedElement.innerText = position.coords.speed ? 
    (position.coords.speed * 3.6).toFixed(1) : 0
  }

  function handleError(error) {
    console.log(error.msg)
  }

  const option = { enableHighAccuracy: true }
  watchID = navigator.geolocation.watchPosition(handleSuccess, handleError, option)

  startBtn.classList.add("hidden")
  stopBtn.classList.remove("hidden")
})

stopBtn.addEventListener("click", () => {
  if (!watchID)
      return
  navigator.geolocation.clearWatch(watchID)
  watchID = null
  startBtn.classList.remove("hidden")
  stopBtn.classList.add("hidden")
})
