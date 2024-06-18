using System.Threading.Tasks;
using WeatherVueDotNet7.Model.AirQualityModel;

namespace WeatherVueDotNet7.Services.AirQualityServices
{
    public interface IAirQualityServices
    {
        Task<WeatherData> GetAirQuality(double lat, double lon);
    }
}
