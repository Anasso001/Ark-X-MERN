const fs = require('fs')

function selectRandomCity(cities) {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}


fs.readFile('input.txt', 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    try {
      const cities = JSON.parse(data);
      const selectedCity = selectRandomCity(cities);
      const { lat, lng, name } = selectedCity;
      const temperature = await fetchTemperature(lat, lng);
      const content = `Temperature in ${name} is: ${temperature}°C`;

      await fs.promises.writeFile(`${name}.txt`, content);
      console.log('File created successfully.');
    } catch (error) {
      console.error('Error:', error);
    }
  }
});



