using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WeatherVueDotNet7.Model;

namespace WeatherVueDotNet7.Data
{
    public class DataContext : IdentityDbContext<ApplicationUser>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Location> Locations { get; set; }
        //public DbSet<WeatherResponse> WeatherResponses{ get; set; }
        //public DbSet<Cloud> Clouds { get; set; }
        //public DbSet<Coord> Coords { get; set; }
        //public DbSet<Main> Mains { get; set; }
        //public DbSet<Sys> Syss { get; set; }
        //public DbSet<Weather> Weathers { get; set; }
        //public DbSet<Wind> Winds { get; set; }

    }
}
