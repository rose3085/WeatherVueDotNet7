using System.ComponentModel.DataAnnotations;

namespace WeatherVueDotNet7.DTO
{
    public class RegisterDto
    {
        [Required]
        public string UserName { get; set; }
        public long PhoneNumber { get; set; }

        //public String Address { get; set; } 
        [Required]

        [StringLength(50)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 6)]
        public string Password { get; set; }

        public string ConfirmPassword { get; set; }
        //[Required]
        //public string FirstName { get; set; }
        //[Required]
        //public string LastName { get; set; }
    }
}
