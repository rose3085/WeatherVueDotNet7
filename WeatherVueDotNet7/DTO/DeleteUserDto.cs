using System.ComponentModel.DataAnnotations;

namespace WeatherVueDotNet7.DTO
{
    public class DeleteUserDto
    {
        [Required]
        public string UserName{ get; set; }
        [Required]

        [StringLength(50)]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 6)]
        public string Password { get; set; }
    }
}
