using System.ComponentModel.DataAnnotations;

namespace WeatherVueDotNet7.DTO
{
    public class UpdateRequest
    {


        [Required]
        public string? Name { get; set; }

        public string? ExtraInfo { get; set; }
    }
}
