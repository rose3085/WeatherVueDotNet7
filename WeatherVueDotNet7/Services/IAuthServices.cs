using WeatherVueDotNet7.DTO;

namespace WeatherVueDotNet7.Services.AuthServices
{
    public interface IAuthServices
    {
        Task<AuthServiceResponseDto> RegisterAsync(RegisterDto registerDto);
        Task<AuthServiceResponseDto> LoginAsync(LoginDto loginDto);
        Task<AuthServiceResponseDto> MakeAdminAsync(UpdatePremissionDto model);
        Task<AuthServiceResponseDto> SeedRolesAsync();
        //Task<ResponseManager> MakeAdmin(UpdatePremissionDto model);
    }
}
