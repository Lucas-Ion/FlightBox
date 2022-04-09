using System.ComponentModel.DataAnnotations;

namespace FlightBox.Models
{
    public class Airline : User
    {
        [Required]
        public string airlineCompanyName { get; set; }
    }
}