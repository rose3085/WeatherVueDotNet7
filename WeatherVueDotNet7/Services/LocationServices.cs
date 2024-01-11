using Microsoft.EntityFrameworkCore;
using WeatherVueDotNet7.Data;
using WeatherVueDotNet7.DTO;
using WeatherVueDotNet7.Model;

namespace WeatherVueDotNet7.Services.LocationServices
{
    public class LocationServices : ILocationServices
    {
        private readonly DataContext _context;
        public LocationServices(DataContext context)
        {
            _context = context;
        }
        public async Task<List<Location>> SetLocation(Location location)
        {

            Location locations = new Location()
            {
                UserLocation = location.UserLocation,
           };

            return null;
        }
    }
}
