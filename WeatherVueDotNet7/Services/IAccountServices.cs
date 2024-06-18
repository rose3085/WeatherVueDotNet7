using WeatherVueDotNet7.DTO;
using WeatherVueDotNet7.Model;

namespace WeatherVueDotNet7.Services
{
    public interface IAccountServices
    {

        Task<AuthenticateResponse> Authenticate(AuthenticateRequest model);
        Task<ApplicationUser> Update(int id, UpdateRequest model);
        Task Delete(int id);


    }
}
