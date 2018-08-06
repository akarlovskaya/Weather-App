class Weather {
    constructor(city, country) {
        this.apiKey = 'b3672363871803a140d5dc1bf4fb91a1';
        this.endPoint = 'http://api.openweathermap.org/data/2.5/weather?q=';
        this.city = city;
        this.country = country;
    }

    // fetch weather from API
    async getWeather() {
        const apiCall = `${this.endPoint}${this.city},${this.country}&units=metric&APPID=${this.apiKey}`;

        let response = await fetch(apiCall);
        let weatherJson = await response.json();
        return weatherJson;
    }

}
