// Initialize storage object
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Initialize weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Initialize UI object
const ui = new UI();

// Event listeners
document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-btn').addEventListener('click', updateWeather);

function getWeather() {
    weather.getWeather()
        .then(
            result => {
                ui.outputData(result);
            }
        )
        .catch(err => console.log(error));
}

function updateWeather() {
    let cityModalElValue = document.getElementById('city').value;
    const countryModalEl = document.getElementById('country');
    let countryModalElValue = countryModalEl.options[countryModalEl.selectedIndex].textContent;

    weather.changeLocation(cityModalElValue, countryModalElValue);
    storage.setLocationData(cityModalElValue, countryModalElValue);
    getWeather(); // repaint updated City info and weather data
    closeModal();
}
