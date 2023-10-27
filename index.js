const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const api = fetch('https://worldtimeapi.org/api/timezone/America/Detroit').then(response => response.json())
const dayOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]
const fetchTheDay = () => {
  api.then(data => {
    if (data.error) {
      h1.textContent = `Failed to get :(`
      p.textContent =`
      This might be an issue with your connection, or the server is down.`
    }
    else {
     h1.textContent = `
     It is ${dayOfWeek[data.day_of_week]}`
     p.textContent = ``
    }
})
}
fetchTheDay()
