using Microsoft.AspNetCore.Identity;

namespace WeatherVueDotNet7.Model
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
