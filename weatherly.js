require("dotenv").config();

const city = process.argv.slice(2).join(" ");
const apiKey = process.env.OPENWEATHER_API_KEY;

if (!city) {
    console.log("Please enter a city name.");
    console.log("Example: node weatherly.js London");
    process.exit(1);
}

if (!apiKey) {
    console.log("Missing API key. Add OPENWEATHER_API_KEY to your .env file.");
    process.exit(1);
}

function capitalize(text) {
    return text
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

function formatTime(unixTime, timezoneOffset) {
    const date = new Date((unixTime + timezoneOffset) * 1000);

    return date.toUTCString().slice(17, 22);
}

async function getWeather(cityName) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            cityName
        )}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Could not fetch weather data.");
        }

        const name = data.name;
        const country = data.sys.country;
        const temp = Math.round(data.main.temp);
        const feelsLike = Math.round(data.main.feels_like);
        const conditions = capitalize(data.weather[0].description);
        const humidity = data.main.humidity;
        const windKmh = Math.round(data.wind.speed * 3.6);
        const sunrise = formatTime(data.sys.sunrise, data.timezone);
        const sunset = formatTime(data.sys.sunset, data.timezone);

        console.log(`
====================================
        🌦️ WEATHERLY
====================================

📍 Location: ${name}, ${country}
🌡️ Temperature: ${temp}°C
🤔 Feels Like: ${feelsLike}°C
☁️ Conditions: ${conditions}
💧 Humidity: ${humidity}%
💨 Wind: ${windKmh} km/h
🌅 Sunrise: ${sunrise}
🌇 Sunset: ${sunset}

Have a great day! ☀️
`);
    } catch (error) {
        console.log(`❌ Error: ${error.message}`);
    }
}

getWeather(city);