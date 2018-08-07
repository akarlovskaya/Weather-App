class UI {
    constructor() {
        this.locationEl = document.getElementById('w-location');
        this.descriptionEl = document.getElementById('w-desc');
        this.temperatureEl = document.getElementById('w-string');
        this.imgIconEl = document.getElementById('w-icon');
        this.humidityEl = document.getElementById('w-humidity');
        this.pressureEl = document.getElementById('w-pressure');
        this.windSpeedEl = document.getElementById('w-wind-speed');
        this.windDegEl = document.getElementById('w-wind-deg');
    }

    outputData(weatherData) {
        this.locationEl.textContent = weatherData.name;
        this.descriptionEl.textContent = weatherData.weather[0].description;
        this.temperatureEl.innerHTML = ` ${Math.floor(weatherData.main.temp)} &#8451; `;
        const iconUrl = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
        this.imgIconEl.setAttribute('src', iconUrl);
        this.humidityEl.textContent = ` Relative humidity: ${weatherData.main.humidity}%`;
        this.pressureEl.textContent = ` Pressure: ${weatherData.main.pressure} `;
        this.windSpeedEl.textContent = ` Wind speed: ${weatherData.wind.speed} MPH`;
        this.windDegEl.textContent = ` Wind degree: ${weatherData.wind.deg}`;
    }
}

function closeModal() {
    const modal = document.querySelector('.modal');
    const modalBackdrop = document.querySelector('.modal-backdrop');

    modal.classList.remove('show');
    modalBackdrop.classList.remove('show');
}
