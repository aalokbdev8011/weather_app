export const getWeather = async (city, selectedCountry, setWeatherData, setIsLoading) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL
  const API_KEY =  process.env.REACT_APP_API_KEY
  const DAYS = process.env.REACT_APP_DAY

  const buildWeatherUrl = (city, countryCode) => {
    if (!city || !countryCode) {
      throw new Error("City and country code are required to build the weather URL.");
    }
  
    return `${BASE_URL}?city=${city},${countryCode}&days=${DAYS}&key=${API_KEY}`;
  };
  
  if (!city || !selectedCountry) {
    alert("Please select a country and enter a city.");
    return;
  }

  setIsLoading(true);
  setWeatherData(null);

  try {
    const url = buildWeatherUrl(city, selectedCountry);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }

    const data = await response.json();

    if (data && data.data) {
      console.log("Starting date:", data.data[0].datetime); // Pehli date
      const lastIndex = data.data.length - 1; // Last element ka index
      console.log("Last date:", data.data[lastIndex].datetime); // Last date    
      setWeatherData(data.data); // Save the daily forecast data
    } else {
      alert("No weather data found for the selected city and country.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Oh snap! You got an error!");
  } finally {
    setIsLoading(false);
  }
};
