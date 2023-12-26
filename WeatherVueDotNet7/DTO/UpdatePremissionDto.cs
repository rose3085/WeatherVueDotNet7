using System.ComponentModel.DataAnnotations;

namespace WeatherVueDotNet7.DTO
{
    public class UpdatePremissionDto
    {
        [Required(ErrorMessage = "UserName is required")]
        public string UserName { get; set; }
    }
}
