// select HTML elements in the document
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#currently');
const weathericon = document.querySelector('#weatherlogo');
const caption = document.querySelector('figCaption');
const humidity = document.querySelector("#humidity");
const forecast = document.querySelector("#forecast");
const apiKey = "4ce191c6f8d82ff7aa50f70affa03999";

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=5334223&units=imperial&appid=becb5112009e06b81ad44734c0504e26`;

async function apiFetch() {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();
//{"coord":{"lon":-84.497,"lat":38.0464},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":55.74,"feels_like":53.28,"temp_min":54.09,"temp_max":58.32,"pressure":1015,"humidity":48},"visibility":10000,"wind":{"speed":8.05,"deg":110},"clouds":{"all":0},"dt":1669493509,"sys":{"type":2,"id":2073151,"country":"US","sunrise":1669465837,"sunset":1669501225},"timezone":-18000,"id":4297983,"name":"Lexington","cod":200}

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

// currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

function displayResults(data) {
    let desc = capitalize(data.list[0].weather[0].description)
    let day2 = data.list[8].main.temp.toFixed(0)
    let day3 = data.list[16].main.temp.toFixed(0)
    let day4 = data.list[24].main.temp.toFixed(0)
    caption.textContent = `Current weather in ${data.city.name}`;

    weathericon.src = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    weathericon.alt = `Current weather in Carlsbad is: ${desc}`;
    description.textContent = desc;

    temperature.textContent = (`Temperature: ${data.list[0].main.temp.toFixed(0)}°F`);
    humidity.textContent = (`Humidity: ${data.list[0].main.humidity}%`)

    forecast.textContent = (`Day 1: ${day2}°F      Day 2: ${day3}°F      Day 3: ${day4}°F`)

    
    
    
}