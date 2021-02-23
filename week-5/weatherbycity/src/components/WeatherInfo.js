const WeatherInfo = ({ city, weather }) => {
    return (
        <div>
            <h3>{city} weather</h3>
            <div>Temperature: {weather.temperature} Celcius</div>
            <div>Weather: {weather.weatherReport}</div>
            <div><img src={weather.iconUrl} alt="weather-icon" width="40" height="40" /></div>
        </div>
    )
}

export default WeatherInfo