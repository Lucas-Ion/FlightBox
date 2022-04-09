using System.ComponentModel.DataAnnotations;

namespace FlightBox.Models
{
    public class Customer : User
    {
        [Required]
        public string creditCardNumber { get; set; }
    }
}