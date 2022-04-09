using System.ComponentModel.DataAnnotations;

namespace FlightBox.Models
{
    public class Admin : User
    {
        [Required]
        public List<Report> reports { get; set; }
        public Admin()
        {
            reports = new List<Report>();
        }
    }
}