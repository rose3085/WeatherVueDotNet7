using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeatherVueDotNet7.Services.AirQualityServices;

namespace WeatherVueDotNet7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirQualityController : ControllerBase
    {
        private readonly IAirQualityServices _airQualityServices;
        public AirQualityController(IAirQualityServices airQualityServices)
        {
            _airQualityServices = airQualityServices;
        }

        [HttpGet]
        [Route("{lat}/{lon}")]
        public async Task<IActionResult> GetAirQuality(double lat, double lon)
        {
            try
            {
                var weatherData = await _airQualityServices.GetAirQuality(lat, lon);
                return Ok(weatherData);
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message);

            }
        }
    }
}
