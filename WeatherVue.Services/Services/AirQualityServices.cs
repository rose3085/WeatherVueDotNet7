using Newtonsoft.Json;
using WeatherVueDotNet7.Helper;
using WeatherVueDotNet7.Model.AirQualityModel;

namespace WeatherVueDotNet7.Services.AirQualityServices
{
    public class AirQualityServices : IAirQualityServices
    {

        public async Task<WeatherData> GetAirQuality(double lat, double lon)
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    string idoWeather = Constants.OPEN_WEATHER_APP_ID;
                    string apiUrl = $"http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={idoWeather}";
                    HttpResponseMessage response = await client.GetAsync(apiUrl);

                    if (response.IsSuccessStatusCode)
                    {
                        var result = await response.Content.ReadAsStringAsync();
                        WeatherData weatherData = JsonConvert.DeserializeObject<WeatherData>(result);
                        return weatherData;
                    }
                    else
                    {
                        // handle the error by throwing an exception
                        throw new Exception($"error: {response.StatusCode} - {response.ReasonPhrase}");
                    }
                }
            }
            catch (Exception ex)
            {

                // handle exceptions
                throw new Exception("error while fetching weather data", ex);
            }

        }
    }
}
