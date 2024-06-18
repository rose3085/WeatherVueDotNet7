using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp;
using WeatherVueDotNet7.Model.CurrentWeatherModel;

namespace WeatherVueDotNet7.Services.ForecastServices
{
    public interface IForecastServices
    {
        Task<WeatherResponse> GetWeatherAsync(string city);
        //string GetWeatherMap(string city);
        Task<Image<Rgba32>> GetWeatherMap(string layer, int z, int x, int y);
       
    }
}
