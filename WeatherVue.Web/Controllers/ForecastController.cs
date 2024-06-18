using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
//using WeatherVueDotNet7.Services.ForecastServices;

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
        [Route("{city}")]
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



        [HttpGet]
        [Route("weatherMap")]
        //public async Task<IActionResult> GetWeatherMap(string layer, int x, int y, int z)
        //{
        //    try
        //    {
        //        byte[] imageBytes = await _forecastServices.GetWeatherMap(layer, x,y,z);
        //        if (imageBytes != null)
        //        {
        //            return Ok(imageBytes);
        //        }
        //        return NotFound();
        //    }
        //    catch(Exception ex)
        //    {
        //        return StatusCode(500, ex.Message);
        //    }
        //}
        public async Task<IActionResult> GetWeatherMap(string layer, int z, int x, int y)
        {
            try
            {
                Image<Rgba32> weatherMap = await _forecastServices.GetWeatherMap(layer, z, x, y);

                if (weatherMap != null)
                {
                    using (MemoryStream memoryStream = new MemoryStream())
                    {
                        weatherMap.SaveAsPng(memoryStream); // Save the image to a stream (or choose a different format if needed)
                        memoryStream.Seek(0, SeekOrigin.Begin);

                        return File(memoryStream.ToArray(), "image/png"); // Return the image as a file result
                    }
                }
                else
                {
                    return NotFound(); // Or return a different status code based on your requirements
                }
            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}