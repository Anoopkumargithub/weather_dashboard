# Weather Dashboard

The Weather Dashboard application allows users to search for weather information by city. It consists of a backend server that fetches weather data from the OpenWeatherMap API and a frontend client that displays the weather information.


## Setup

### Clone the Repository

```sh
git clone https://github.com/your-repo/weather_dashboard.git
cd weather_dashboard
```

### Server Setup

1. Navigate to the `server` directory:

   ```sh
   cd server
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `server` directory and add your OpenWeatherMap API key:

   ```env
   WEATHER_API_KEY=your_openweathermap_api_key
   ```

4. Start the server:

   ```sh
   npm run dev
   ```

   The server will start on `http://localhost:3000`.

### Client Setup

1. Navigate to the `client` directory:

   ```sh
   cd ../client
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `client` directory and add the backend URL:

   ```env
   PORT=8080
   REACT_APP_BACKEND_URL=YOUR_BACKEND_URL
   ```

4. Start the client:

   ```sh
   npm start
   ```

   The client will start on `http://localhost:8080`.

## Usage

1. Open your browser and navigate to `http://localhost:8080`.
2. Enter a city name in the search bar and click "Search".
3. The weather information for the specified city will be displayed.
