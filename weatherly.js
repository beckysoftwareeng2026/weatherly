require("dotenv").config();

const city = process.argv.slice(2).join(" ");

if (!city) {
    console.log("Please enter a city name.");
    console.log("Example: node weatherly.js London");
    process.exit(1);
}

const apiKey = process.env.OPENWEATHER_API_KEY;

if (!apiKey) {
    console.log("Missing API key. Add OPENWEATHER_API_KEY to your .env file.");
    process.exit(1);
}

async function getWeather(cityName) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            cityName
        )}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            console.log(error); // Show the actual API error
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        const name = data.name;
        const temp = Math.round(data.main.temp);
        const conditions = data.weather[0].description;
        const humidity = data.main.humidity;
        const windKmh = Math.round(data.wind.speed * 3.6);

        console.log(`🌦️ ${name}: ${temp}°C, ${capitalize(conditions)}`);
        console.log(`💧 Humidity: ${humidity}% | 💨 Wind: ${windKmh} km/h`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

function capitalize(text) {
    return text
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

getWeather(city);