using System.ComponentModel.DataAnnotations;

namespace WeatherVueDotNet7.DTO
{
    public class LoginDto
    {
        [Required]

        public string UserName { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 6)]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
