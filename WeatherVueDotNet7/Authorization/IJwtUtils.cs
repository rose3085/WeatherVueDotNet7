using Microsoft.Identity.Client;
using WeatherVueDotNet7.Model;

namespace WeatherVueDotNet7.Authorization
{
    public interface IJwtUtils
    {
        public string GenerateJwtToken(ApplicationUser accounts);
        public int? ValidateJwtToken(string? token);
    }
}
