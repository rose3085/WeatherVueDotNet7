using Newtonsoft.Json;

namespace WeatherVueDotNet7.Model.FiveDayForecastModel
{
    public class ListItem
    {
        public int dt { get; set; }
        public Main main { get; set; }
        public List<Weather> weather { get; set; }
        public Clouds clouds { get; set; }
        public Wind wind { get; set; }
        public int visibility { get; set; }
      
        [JsonProperty("pop")] 
        public double pop { get; set; }
        public Sys sys { get; set; }
        public string dt_txt { get; set; }

    }
}
