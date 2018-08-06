// Initialized weather object
const weather = new Weather('Vancouver', 'CA');
// Initialized UI object
const ui = new UI();

// Event listeners
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(
            result => {
                ui.outputData(result);
            }
        )
        .catch(err => console.log(error));
}
