using System.ComponentModel.DataAnnotations;

namespace FlightBox.Models
{
    public class Report
    {
        [Key]
        public int reportNumber { get; set; }
        [Required]
        public List<User> users { get; set; }
    }
}