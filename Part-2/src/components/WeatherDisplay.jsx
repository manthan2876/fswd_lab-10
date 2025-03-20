import "./WeatherDisplay.css";

const WeatherDisplay = ({ weather }) => {
  if (!weather) return <p>No data available</p>;

  const { name, main, weather: details } = weather;

  return (
    
    <div className="weather-container">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Condition: {details[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
