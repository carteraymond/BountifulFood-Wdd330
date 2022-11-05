const temperature = document.querySelector('#temperature');
const windSpeed = document.querySelector('#windSpeed');
const windChill = document.querySelector('#windChill');


temperature.addEventListener('change', calcwindChill);
windSpeed.addEventListener('change', calcwindChill);

function calcwindChill(event){

    const temp = parseInt(temperature.value);
    const windSpd = parseInt(windSpeed.value);

    if (temp <= 50 && windSpd > 3) {
       ans = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpd,0.16)) + (0.4275*temp*Math.pow(windSpd,0.16));
       result = Math.round(ans * 100)/100;
    } else if (temp >= 50 && windSpd < 3) {
        result = 'N/A';
    } else {
        result = '';
    }
    
    windChill.textContent = result;
}