using Microsoft.AspNetCore.Identity;
using WeatherVueDotNet7.Authorization;
using WeatherVueDotNet7.Data;
using WeatherVueDotNet7.DTO;
using WeatherVueDotNet7.Model;

namespace WeatherVueDotNet7.Services
{
    public class AccountServices : IAccountServices
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;
        private readonly IJwtUtils _jwtUtils;
        private readonly UserManager<ApplicationUser> _userManager;

        public AccountServices(UserManager<ApplicationUser> userManager,DataContext context, IConfiguration configuration, IJwtUtils jwtUtils)
        {
            _context = context;
            _configuration = configuration;
                _jwtUtils = jwtUtils;
            _userManager = userManager;
        }



        public Task<AuthenticateResponse> Authenticate(AuthenticateRequest model)
        {
            throw new NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ApplicationUser> Update(int id, UpdateRequest model)
        {
            throw new NotImplementedException();
        }
    }
}
