using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FlightBox.Models
{
    public class Flight
    {
        [Key]
        public int Flight_Number { get; set; }

        [ForeignKey("Aircraft")]
        [Required]
        public int Airplane_Registration_Code { get; set; }
        private Aircraft Aircraft { get; set; }
        
        [ForeignKey("Airline")]
        [Required]
        public string Company_Name { get; set; }
        private Airline Airline { get; set; }

        [ForeignKey("Country")]
        [Required]
        public string Country_Name { get; set; }
        private Country Country { get; set; }

        [Required]
        public string TimeOfDeparture { get; set; }
        [Required]
        public string TimeOfArrival { get; set; }
        [Required]
        public string DestinationAirport { get; set; }
        [Required]
        public string DepartureAirport { get; set; }
        [Required]
        public double Price { get; set; }

    }
}