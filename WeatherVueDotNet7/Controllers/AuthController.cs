using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeatherVueDotNet7.DTO;
using WeatherVueDotNet7.Services.AuthServices;

namespace WeatherVueDotNet7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthServices _authServices;
        //private readonly JwtValidateAndDeserialize _jwt;
        public AuthController(IAuthServices authServices)
        {
            _authServices = authServices;
        }
        [HttpPost]
        [Route("seed-roles")]
        public async Task<ActionResult<AuthServiceResponseDto>> SeedRoles()
        {

            var seedRoles = await _authServices.SeedRolesAsync();
            return Ok(seedRoles);
        }
        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto model)
        {
            if (ModelState.IsValid)
            {
                var result = _authServices.RegisterAsync(model).Result;

                return Ok(result);
            }



            return BadRequest();
        }
        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginDto model)
        {
            if (ModelState.IsValid)
            {
                var result = await _authServices.LoginAsync(model);
                return Ok(result);
            }
            return BadRequest();
            //    var loginResult = await _authServices.LoginUserAsync(model);

            //    if (loginResult.IsSuccess)
            //        return Ok(loginResult);

            //    return Unauthorized(loginResult);
        }

        [HttpPost("Delete")]
        public async Task<IActionResult> DeleteUser(DeleteUserDto model)
        {
            if (ModelState.IsValid)
            {
                var result = await _authServices.DeleteUser(model);
                return Ok(result);
            }
            return BadRequest();
        }
        


            [HttpPost]
        [Route("make-admin")]
        public async Task<ActionResult<AuthServiceResponseDto>> MakeAdmin([FromBody] UpdatePremissionDto model)
        {
            var result = await _authServices.MakeAdminAsync(model);

            if (result.IsSucceed == true)
                return Ok(result);

            return BadRequest(result);
        }
    }
}
