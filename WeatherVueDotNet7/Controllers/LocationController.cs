using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeatherVueDotNet7.DTO;
using WeatherVueDotNet7.Model;
using WeatherVueDotNet7.Services.LocationServices;

namespace WeatherVueDotNet7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocationServices _locationServices;
        public LocationController(ILocationServices locationServices)
        {
            _locationServices = locationServices;
        }

        [HttpPost("{location}")]

        public async Task<IActionResult> SetLocation([FromBody]Location location)
        {
            var locationResult = await _locationServices.SetLocation(location);
            return Ok(locationResult);
        }
    }
}
