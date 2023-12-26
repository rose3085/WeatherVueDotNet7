using Microsoft.VisualBasic;
using WeatherVueDotNet7.OpenWeatherMapModel;

namespace WeatherVueDotNet7.Services.ForecastServices
{
    public interface IForecastServices
    {
        Task<WeatherResponse> GetWeatherAsync(string city);
    }
}
