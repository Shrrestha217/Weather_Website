# Weather Application using React
This project is a weather application built using React, Tailwind CSS, and the OpenWeatherMap API. It provides current weather information, hourly forecasts, and daily forecasts, along with features like location search and geolocation.

## Features

* **Current Weather:** Displays current temperature, max/min temperatures, humidity, "feels like" temperature, sunrise, and sunset times.
* **Hourly Forecast:** Shows weather forecasts for the next few hours.
* **Daily Forecast:** Provides weather forecasts for the upcoming days.
* **Location Search:** Allows users to search for weather by city name.
* **Geolocation:** Enables users to get weather information based on their current location.
* **Quick Location Links:** Provides quick links to popular locations.
* **Local Time Display:** Shows the local time of the selected location.
* **React Toastify:** Handles user notifications.
* **Luxon:** For date and time formatting.
* **React Icons:** For icons.

## Technologies Used

* **React:** JavaScript library for building user interfaces.
* **Tailwind CSS:** Utility-first CSS framework.
* **OpenWeatherMap API:** Provides weather data.
* **Luxon:** Library for working with dates and times.
* **React Icons:** Library for using icons in React applications.
* **React Toastify:** Notification library for React.

## Usage

* Use the search bar to enter a city name and get its weather.
* Click the "Current Location" button to get weather based on your geolocation.
* Use the quick links at the top of the page to quickly get the weather for popular cities.
* Observe the current weather, hourly, and daily forecasts displayed on the page.

## Dependencies

```json
{
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "luxon": "^3.3.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.8.0",
    "react-scripts": "5.0.1",
    "react-toastify": "^9.1.3",
    "tailwindcss": "^3.3.2",
    "web-vitals": "^2.1.4"
  }
}
