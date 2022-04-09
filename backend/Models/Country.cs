using System.ComponentModel.DataAnnotations;

namespace FlightBox.Models
{
    public class Country
    {

        [Key]
        public string Country_Name { get; set; }
        
        [Required]
        public string Languages { get; set; }

        [Required]
        public string TouristAttractions { get; set; }
    }
}