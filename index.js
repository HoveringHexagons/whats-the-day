const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const api = fetch('https://worldtimeapi.org/api/timezone/America/Detroit').then(response => response.json())
const dayOfWeek = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
]
const fetchTheDay = () => {
  api.then(data => {
     h1.textContent = `
     It is ${dayOfWeek[data.day_of_week -1]}`
     p.textContent = ``
})
}
fetchTheDay()
