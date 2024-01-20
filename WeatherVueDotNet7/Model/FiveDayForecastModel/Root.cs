namespace WeatherVueDotNet7.Model.FiveDayForecastModel
{
    public class Root
    {
        public string cod { get; set; }
        public int message { get; set; }
        public int cnt { get; set; }
        public List<ListItem> list { get; set; }
        public City city { get; set; }
    }
}
