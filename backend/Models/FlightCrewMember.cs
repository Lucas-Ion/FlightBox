using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FlightBox.Models
{
    public class FlightCrewMember
    {
        [Key]
        public int EmployeeID { get; set; }

        [ForeignKey("Aircraft")]
        [Required]
        public int Airplane_Registration_Code { get; set; }
        public Aircraft Aircraft { get; set; }

        [Required]
        public string role { get; set; }
    }
}