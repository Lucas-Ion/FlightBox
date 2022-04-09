using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FlightBox.Models
{
    public class Baggage
    {
        [Key]
        public int Baggage_Tracking_ID { get; set; }
        
        [ForeignKey("Customer")]
        [Required]
        public int ProfileID { get; set; }
        private Customer Customer { get; set; }
        
        [Required]
        public double weight { get; set; }
    }
}