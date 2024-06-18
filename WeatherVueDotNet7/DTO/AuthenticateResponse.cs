namespace WeatherVueDotNet7.DTO
{
    public class AuthenticateResponse
    {


        public long FacebookId { get; set; }
        public string? Name { get; set; }
        public string? ExtraInfo { get; set; }
        public string Token { get; set; }
    }
}
