using System.ComponentModel.DataAnnotations;

namespace WeatherVueDotNet7.DTO
{
    public class AuthenticateRequest
    {
        [Required]
        public string? AccessToken { get; set; }
    }
}
