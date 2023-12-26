namespace WeatherVueDotNet7.DTO
{
    public class AuthServiceResponseDto
    {
        public string Message { get; set; }
        public bool IsSucceed { get; set; }

        public DateTime? ExpireDate { get; set; }
    }
}
