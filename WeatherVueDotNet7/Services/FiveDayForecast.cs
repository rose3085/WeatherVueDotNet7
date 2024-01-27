using Newtonsoft.Json;


using WeatherVueDotNet7.Helper;
using WeatherVueDotNet7.Model.FiveDayForecastModel;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace WeatherVueDotNet7.Services.FiveDayForecast
{
    public class FiveDayForecast : IFiveDayForecast
    {
        public async Task<Root> GetFiveDayForecast(string cityName)
        {
               try
                {
                    using (HttpClient client = new HttpClient())
                    {
                        string idoWeather = Constants.OPEN_WEATHER_APP_ID;
                    //string apiUrl = $"https://api.openweathermap.org/data/2.5/forecast? lat ={ lat} &lon ={ lon}&appid={idoWeather}";
                    string apiUrl =$"https://api.openweathermap.org/data/2.5/forecast?q={cityName}&cnt=8&appid={idoWeather}";
                  
                    HttpResponseMessage response = await client.GetAsync(apiUrl);

                        if (response.IsSuccessStatusCode)
                        {
                            var result = await response.Content.ReadAsStringAsync();
                            Root listItem = JsonConvert.DeserializeObject<Root>(result);
                           
                           
                                return listItem;
                                // Handle the case where the conversion fails
                          
                       
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
