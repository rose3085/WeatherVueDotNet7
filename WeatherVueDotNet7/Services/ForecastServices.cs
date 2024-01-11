using Newtonsoft.Json;
using WeatherVueDotNet7.OpenWeatherMapModel;
using WeatherVueDotNet7.Helper;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;


namespace WeatherVueDotNet7.Services.ForecastServices
{
    public class ForecastServices : IForecastServices
    {
        //private const string WeatherApiEndpoint = "https://api.weather.com/data/2.5/weather";
        //private readonly string _apiKey;
        //private object jsonconvert;

        //public ForecastServices(string apiKey)
        //{
        //    _apiKey = apiKey;
        //}

        //public async Task<WeatherResponse> GetWeatherAsync(string cityName)
        //{
        //    try
        //    {
        //        string apiUrl = $"https://api.openweathermap.org/data/2.5/weather??q=cityName&apikey=b81254f0e327b2707342b7d4fc3e7837";

        //        using (HttpClient httpClient = new HttpClient())
        //        {
        //            httpClient.DefaultRequestHeaders.Add("Authorization", _apiKey);

        //            HttpResponseMessage response = httpClient.GetAsync(apiUrl).Result;

        //            if (response.IsSuccessStatusCode)
        //            {
        //                var result = await response.Content.ReadAsStringAsync();
        //                WeatherResponse weatherResponse = JsonConvert.DeserializeObject<WeatherResponse>(result);
        //                return weatherResponse;
        //            }
        //            else
        //            {
        //                // Handle error or return null
        //                throw new Exception($"error: {response.StatusCode} - {response.ReasonPhrase}");
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {


        //        // handle exceptions
        //        throw new Exception("error while fetching weather data", ex);
        //    }

        //    }
        public async Task<WeatherResponse> GetWeatherAsync(string city)
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    string idoWeather = Constants.OPEN_WEATHER_APP_ID;
                    //string apiurl= $"{https://api.openweathermap.org/data/2.5/weather?q={{city name}}&appid={{idoweather}}}";
                    string apiurl = $"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={idoWeather}";
                    HttpResponseMessage response = await client.GetAsync(apiurl);

                    if (response.IsSuccessStatusCode)
                    {
                        var result = await response.Content.ReadAsStringAsync();
                        WeatherResponse weatherResponse = JsonConvert.DeserializeObject<WeatherResponse>(result);
                        return weatherResponse;
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

        //public async Task<byte[]> GetWeatherMap(string layer, int z, int x, int y)
        //{
        //    try
        //    {
        //        using (HttpClient client = new HttpClient())
        //        {
        //            string idoWeather = Constants.OPEN_WEATHER_APP_ID;
        //            string apiUrl = $"https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={idoWeather} ";
        //            HttpResponseMessage response = await client.GetAsync(apiUrl);
        //            if (response.IsSuccessStatusCode)
        //            {
        //                return await response.Content.ReadAsByteArrayAsync();
        //            }
        //            return null;
        //        }
        //    }
        //    catch (Exception ex) { 
        //        // handle exceptions
        //        throw new Exception("error while fetching weather data", ex);
        //    }
        //}
        public async Task<Image<Rgba32>> GetWeatherMap(string layer, int z, int x, int y)
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    string idoWeather = Constants.OPEN_WEATHER_APP_ID;
                    string apiUrl = $"https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={idoWeather}";
                    HttpResponseMessage response = await client.GetAsync(apiUrl);

                    if (response.IsSuccessStatusCode)
                    {
                        Stream stream = await response.Content.ReadAsStreamAsync();
                        return Image.Load<Rgba32>(stream);

                    }

                    return null;
                }
            }
            catch (Exception ex)
            {
                // handle exceptions
                throw new Exception("Error while fetching weather data", ex);
            }
        }
    }
}

