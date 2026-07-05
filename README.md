# 🌦️ Weatherly

A command-line weather application built with **Node.js** that fetches live weather data using the **OpenWeather API**.

Weatherly demonstrates how to work with APIs, asynchronous JavaScript, environment variables, and command-line applications.

---

## 📸 Demo

```bash
node weatherly.js London
```

Example Output:

```text
🌦️ London: 24°C, Overcast Clouds
💧 Humidity: 62% | 💨 Wind: 8 km/h
```

---

## ✨ Features

- 🌍 Search weather by city
- 🌡️ Live temperature
- ☁️ Current weather conditions
- 💧 Humidity
- 💨 Wind speed
- 🔒 Secure API key stored in a `.env` file
- ⚠️ Error handling for invalid cities and API issues

---

## 🛠️ Technologies Used

- Node.js
- JavaScript (ES2023)
- OpenWeather API
- dotenv

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/beckysoftwareeng2026/weatherly.git
```

Move into the project:

```bash
cd weatherly
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
OPENWEATHER_API_KEY=your_api_key_here
```

Run the application:

```bash
node weatherly.js London
```

---

## 📁 Project Structure

```text
weatherly/
│
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── weatherly.js
└── README.md
```

---

## 🧠 What I Learned

This project gave me hands-on experience with:

- Reading command-line arguments using `process.argv`
- Making HTTP requests with `fetch()`
- Using `async/await`
- Parsing JSON responses
- Protecting API keys with environment variables
- Writing clean error handling
- Building a complete Node.js CLI application

---

## 🚀 Future Improvements

- 🌅 Sunrise and sunset times
- 🌡️ "Feels Like" temperature
- 🌎 Country information
- 📅 5-day forecast
- 📍 Automatic location detection
- 🌡️ Fahrenheit / Celsius toggle
- 🎨 Improved terminal formatting

---

## 👩‍💻 About the Developer

Hi! I'm **Jennifer**.

I'm transitioning into software engineering and documenting my journey by building real-world projects that strengthen my JavaScript, Node.js, React, SQL, and full-stack development skills.

You can follow my progress here:

- 🌐 **Portfolio:** https://jennifercreates.dev
- 💻 **GitHub:** https://github.com/beckysoftwareeng2026

---

## 📄 License

This project is open source and available under the MIT License.
