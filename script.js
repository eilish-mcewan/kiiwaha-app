fetch('./models/kiiwaha.json')
  .then(response => response.json())
  .then(data => {
      const today = new Date()                                                                          
      const day = today.getDate()        
      const month = today.getMonth()                                  
      const year = today.getFullYear()
      const dateNumber = year * 10000 + month * 100 + day;
      const index = dateNumber % data.length; 
      const todaysKiiwaha = data[index];
      const kiiwahaElement = document.getElementById('kiwaha');
      const definitionElement = document.getElementById('definition');
      kiiwahaElement.textContent = todaysKiiwaha.kīwaha;
      definitionElement.textContent = todaysKiiwaha.definition;
      console.log(todaysKiiwaha);
  })
  .catch(error => console.error('Error fetching data:', error));