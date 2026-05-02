function setTheme(theme) {
  document.body.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

setTheme(localStorage.getItem('theme') || 'forest')

document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => setTheme(btn.dataset.theme))
})

fetch('./models/kiiwaha.json')
  .then(response => response.json())
  .then(data => {
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()
    const year = today.getFullYear()
    const dateNumber = year * 10000 + month * 100 + day
    const index = dateNumber % data.length
    const todaysKiiwaha = data[index]
    document.getElementById('kiiwaha').textContent = todaysKiiwaha['kīwaha']
    document.getElementById('definition').textContent = todaysKiiwaha.definition
  })
  .catch(error => console.error('Error fetching data:', error))
