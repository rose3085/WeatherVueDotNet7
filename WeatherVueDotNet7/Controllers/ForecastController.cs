using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeatherVueDotNet7.Services.ForecastServices;

namespace WeatherVueDotNet7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ForecastController : ControllerBase
    {
        private readonly IForecastServices _forecastServices;
        public ForecastController(IForecastServices forecastServices)
        {
            _forecastServices = forecastServices;
        }
        [HttpGet]
        public async Task<IActionResult> GetWeather(string city)
        {
            try
            {
                var weatherData = await _forecastServices.GetWeatherAsync(city);
                return Ok(weatherData);
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message);

            }
        }
    }
}