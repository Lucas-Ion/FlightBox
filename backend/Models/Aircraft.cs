using System.ComponentModel.DataAnnotations;

namespace FlightBox.Models
{
    public class Aircraft
    {
        [Key]
        public int Airplane_Registration_Code { get; set; }
        
        [Required]
        public string Aircraft_Type { get; set; }
        [Required]
        public int Number_of_Seats { get; set; }
    }
}