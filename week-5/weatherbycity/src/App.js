import React from 'react';
import './App.css';
import WeatherInfo from './components/WeatherInfo'

function App() {
  const [weather, setWeather] = React.useState({ temperature: '', weatherReport: '', iconUrl: '' });
  const [isReady, setIsReady] = React.useState(false);
  const [city, setCity] = React.useState('Helsinki');

  // Query options
  const cityQuery = city;
  const API_KEY = '';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=${API_KEY}&units=metric`;

  // Call API
  const getWeather = (event) => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) throw new Error(response.statusText);

        return response.json();
      })
      .then(responseData => {
        const temp = responseData.main.temp.toFixed(1);
        const weatherReport = responseData.weather[0].main;
        const iconCode = responseData.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        setWeather({ temperature: temp, weatherReport: weatherReport, iconUrl: iconUrl });
        setIsReady(true);
      })
      .catch(err => console.log(err))
  }

  const handleChange = (event) => {
    setCity(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    getWeather();
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={city} onChange={handleChange} />
          <input type="submit" value="Get weather" />
        </form>
      </div>
      {weather.temperature != '' ? (
        <WeatherInfo city={city} weather={weather} />
      ) : (
          <div></div>
        )}
    </div>
  );
}

export default App;
