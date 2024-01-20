using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeatherVueDotNet7.Services.FiveDayForecast;

namespace WeatherVueDotNet7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FiveDayForecastController : ControllerBase
    {
        private readonly IFiveDayForecast _fiveDayForecastServices;
        public FiveDayForecastController(IFiveDayForecast fiveDayForecastServices)
        {
            _fiveDayForecastServices = fiveDayForecastServices;
        }

        [HttpGet]
        [Route("{cityName}")]
        public async Task<IActionResult> GetFiveDayForecast(string cityName)
        {
            try
            {
                var weatherData = await _fiveDayForecastServices.GetFiveDayForecast(cityName);
                return Ok(weatherData);
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message);

            }
        }
    }
}
