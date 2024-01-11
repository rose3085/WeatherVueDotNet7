using WeatherVueDotNet7.DTO;
using WeatherVueDotNet7.Model;

namespace WeatherVueDotNet7.Services.LocationServices
{
    public interface ILocationServices
    {
        Task<List<Location>> SetLocation(Location location);
    }
}
