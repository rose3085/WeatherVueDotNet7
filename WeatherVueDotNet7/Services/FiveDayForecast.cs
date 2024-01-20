using Newtonsoft.Json;
using WeatherVueDotNet7.Helper;
using WeatherVueDotNet7.Model.FiveDayForecastModel;

namespace WeatherVueDotNet7.Services.FiveDayForecast
{
    public class FiveDayForecast : IFiveDayForecast
    {
        public async Task<Root> GetFiveDayForecast(string city)
        {
               try
                {
                    using (HttpClient client = new HttpClient())
                    {
                        string idoWeather = Constants.OPEN_WEATHER_APP_ID;
                    //string apiurl = $"https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={idoWeather}";
                        string apiUrl =$"https://api.openweathermap.org/data/2.5/forecast?q={city}&cnt=6&appid={idoWeather}";
                    HttpResponseMessage response = await client.GetAsync(apiUrl);

                        if (response.IsSuccessStatusCode)
                        {
                            var result = await response.Content.ReadAsStringAsync();
                            Root listItem = JsonConvert.DeserializeObject<Root>(result);
                            return listItem;
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
