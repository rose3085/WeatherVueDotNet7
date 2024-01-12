using WeatherVueDotNet7.DTO;
using WeatherVueDotNet7.Model;

namespace WeatherVueDotNet7.Services.LocationServices
{
    public interface ILocationServices
    {
        Task<Location> SetLocationAsync(Location location);
    }
}
