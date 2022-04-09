using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FlightBox.Models
{
    public class Booking
    {
        [Key]
        public int Seat_Number { get; set; }
        
        [ForeignKey("Customer")]
        [Required]
        public int ProfileID { get; set; }
        private Customer Customer { get; set; }
        
        [ForeignKey("Flight")]
        [Required]
        public double Flight_Number { get; set; }
        private Flight Flight { get; set; }
    }
}