// select HTML elements in the document
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#currently');
const windspeed = document.querySelector('#windSpeed');
const weathericon = document.querySelector('#weatherlogo');
const caption = document.querySelector('figCaption');
const windChill = document.querySelector("#windChill");
const apiKey = "4ce191c6f8d82ff7aa50f70affa03999";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Lexington,US,SC&units=imperial&appid=becb5112009e06b81ad44734c0504e26`;

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
    let desc = capitalize(data.weather[0].description)
    temperature.textContent = (`${data.main.temp.toFixed(0)}°F`);
    caption.textContent = `Current weather in ${data.name}`;
    description.textContent = desc;
    windspeed.textContent = (`The wind speed is ${data.wind.speed}Mph`);
    weathericon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weathericon.alt = `Current weather in Lexington is: ${desc}`;
    let windChillResult=calcwindChill(data);
    windChill.textContent = (`The wind chill is ${windChillResult}°F`)
}
function calcwindChill(data) {

    let t = parseFloat(data.main.temp);
    let s = parseFloat(data.wind.speed);
    console.log(t);
    console.log(s);

    if (t <= 50 && s > 3) {
        ans = (35.74 + (0.6215 * t))-(35.75 * Math.pow(s,0.16)) + (0.4275*t*Math.pow(s,0.16));
       result = Math.round(ans * 100)/100;
       return result
    } else {
        return 'N/A';
    }
}