using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using WeatherVueDotNet7.DTO;
using WeatherVueDotNet7.Model;
using WeatherVueDotNet7.Services.AuthServices;

namespace WeatherVueDotNet7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthServices _authServices;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;

        //private readonly JwtValidateAndDeserialize _jwt;
        public AuthController(IAuthServices authServices, SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _authServices = authServices;
            _signInManager = signInManager;
            _userManager = userManager;
        }
        [HttpPost]
        [Route("seed-roles")]
        public async Task<ActionResult<AuthServiceResponseDto>> SeedRoles()
        {

            var seedRoles = await _authServices.SeedRolesAsync();
            return Ok(seedRoles);
        }

     
        [HttpPost]
        [Route("externalLogin")]
        public IActionResult ExternalLogin()
        {
            var provider = "Facebook";
            //var redirectUrl = Url.Action("ExternalLoginCallback", "Auth",
            //                        new { ReturnUrl= returnUrl });

            var redirectUrl = $"https://localhost:7194/api/Auth/ExternalLoginCallback";
            var properties =
                _signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);

            var uu= new ChallengeResult(provider, properties);

            return uu;
            }




        [HttpPost]
        [Route("ExternalLoginCallback")]
        public async Task<IActionResult> ExternalLoginCallback(string returnUrl = null, string remoteError = null)
        {
            returnUrl = returnUrl ?? Url.Content("~/");

            if (remoteError != null)
            {
                return BadRequest(new { Error = $"Error from external provider: {remoteError}" });
            }

            var info = await _signInManager.GetExternalLoginInfoAsync();
            if (info == null)
            {
                return BadRequest(new { Error = "Error loading external login information." });
            }

            var signInResult = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider,
                                        info.ProviderKey, isPersistent: false, bypassTwoFactor: true);

            if (signInResult.Succeeded)
            {
                return Ok(new { ReturnUrl = returnUrl });
            }
            else
            {
                var email = info.Principal.FindFirstValue(ClaimTypes.Email);

                if (email != null)
                {
                    var user = await _userManager.FindByEmailAsync(email);

                    if (user == null)
                    {
                        user = new ApplicationUser
                        {
                            UserName = info.Principal.FindFirstValue(ClaimTypes.Email),
                            Email = info.Principal.FindFirstValue(ClaimTypes.Email)
                        };

                        var createUserResult = await _userManager.CreateAsync(user);
                        if (!createUserResult.Succeeded)
                        {
                            return BadRequest(new { Error = "Failed to create user." });
                        }
                    }

                    var addLoginResult = await _userManager.AddLoginAsync(user, info);
                    if (!addLoginResult.Succeeded)
                    {
                        return BadRequest(new { Error = "Failed to add external login to user." });
                    }

                    await _signInManager.SignInAsync(user, isPersistent: false);

                    return Ok(new { ReturnUrl = returnUrl });
                }

                return BadRequest(new { Error = "Email claim not found." });
            }
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
