using WeatherVueDotNet7.Model.FiveDayForecastModel;

namespace WeatherVueDotNet7.Services.FiveDayForecast
{
    public interface IFiveDayForecast
    {
        Task<Root> GetFiveDayForecast(string cityName);
    }
}
