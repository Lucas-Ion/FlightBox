using Microsoft.EntityFrameworkCore;
using FlightBox.Models;

namespace FlightBox.Data
{
    /** <summary>
        This class handles the mapping of the database mapping to
        the repository. In this way, it will be able to be refered
        by the repository to allow access to the database.
    </summary> **/
    public class FlightBoxContext : DbContext
    {
        public FlightBoxContext(DbContextOptions<FlightBoxContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlite("Filename=./FlightBoxDatabase.db");
        }

        public DbSet<Customer>? Customers { get; set; }
        public DbSet<Airline>? Airlines { get; set; }
        public DbSet<Baggage>? Baggage { get; set; }
        public DbSet<Booking>? Bookings { get; set; }
        public DbSet<Flight>? Flights { get; set; }
        public DbSet<Aircraft>? Aircrafts { get; set; }
        public DbSet<Admin>? Admins { get; set; }
        public DbSet<Report>? Reports { get; set; }
        public DbSet<Country>? Countries { get; set; }
        public DbSet<FlightCrewMember>? FlightCrewMembers { get; set; }
    }
}