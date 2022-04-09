using System.ComponentModel.DataAnnotations;

namespace FlightBox.Models
{
    public class User
    {
        /// <summary> Unique user ID. </summary>
        [Key]
        public int ProfileID { get; set; }

        [Required]
        public string FirstName { get; set; }
        
        [Required]
        public string LastName { get; set; }
        
        [Required]
        public string email { get; set; }

        [Required]
        public string username { get; set; }

        [Required]
        public string password { get; set; }
    }
}