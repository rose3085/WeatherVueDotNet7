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
        public async Task<Location> SetLocationAsync(Location location)
        {
            await _context.Locations.AddAsync(location);
            await _context.SaveChangesAsync();
            return location;
        }
    }
}
