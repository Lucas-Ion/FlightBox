using FlightBox.Models;

namespace FlightBox.Data
{
    public class SQLiteFlightBoxRepository : IFlightBoxRepository
    {
        private readonly FlightBoxContext activeDatabaseContext;

        public SQLiteFlightBoxRepository(FlightBoxContext databaseContext)
        {
            activeDatabaseContext = databaseContext;
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Airline PostAirline(string FirstName, string LastName, string email, string username,
                                     string password, string airlineCompanyName)
        {
            // Create new:
            Airline newAirline = new Airline();
            newAirline.FirstName = FirstName;
            newAirline.LastName = LastName;
            newAirline.email = email;
            newAirline.username = username;
            newAirline.password = password;
            newAirline.airlineCompanyName = airlineCompanyName;
            
            activeDatabaseContext.Airlines.Add(newAirline);
            activeDatabaseContext.SaveChanges();

            return newAirline;
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Customer PostCustomer(string FirstName, string LastName, string email, string username,
                                     string password, string creditCardNumber)
        {
            // Create new:
            Customer newCustomer = new Customer();
            newCustomer.FirstName = FirstName;
            newCustomer.LastName = LastName;
            newCustomer.email = email;
            newCustomer.username = username;
            newCustomer.password = password;
            newCustomer.creditCardNumber = creditCardNumber;
            
            activeDatabaseContext.Customers.Add(newCustomer);
            activeDatabaseContext.SaveChanges();

            return newCustomer;
        }
        
        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Customer? GetCustomer(string username, string password)
        {
            return activeDatabaseContext.Customers.FirstOrDefault(customer => (customer.username == username && customer.password == password));
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Customer? GetCustomer(string username)
        {
            return activeDatabaseContext.Customers.FirstOrDefault(customer => customer.username == username);
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Airline? GetAirline(string username, string password)
        {
            return activeDatabaseContext.Airlines.FirstOrDefault(airline => (airline.username == username && airline.password == password));
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Airline? GetAirline(string username)
        {
            return activeDatabaseContext.Airlines.FirstOrDefault(airline => airline.username == username);
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Airline? GetAirline(int profileID)
        {
            return activeDatabaseContext.Airlines.Find(profileID);
        }

        public Airline? GetAirlineWithCompanyName(string company_Name)
        {
            return activeDatabaseContext.Airlines.FirstOrDefault(airline => airline.airlineCompanyName == company_Name);
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Customer? GetCustomer(int profileID)
        {
            return activeDatabaseContext.Customers.Find(profileID);
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public void UpdateAirline(Airline airline, string FirstName, string LastName, string email, string username, string password, string airlineCompanyName)
        {
            airline.FirstName = FirstName;
            airline.LastName = LastName;
            airline.email = email;
            airline.username = username;
            airline.password = password;
            airline.airlineCompanyName = airlineCompanyName;

            SaveDBChanges();
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public void UpdateCustomer(Customer customer, string FirstName, string LastName, string email, string username, string password, string creditCardNumber)
        {
            customer.FirstName = FirstName;
            customer.LastName = LastName;
            customer.email = email;
            customer.username = username;
            customer.password = password;
            customer.creditCardNumber = creditCardNumber;

            SaveDBChanges();
        }
        
        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Baggage PostBaggage(int customerProfileID, double weight)
        {
            // Create new:
            Baggage newBaggage = new Baggage();
            newBaggage.ProfileID = customerProfileID;
            newBaggage.weight = weight;
            
            activeDatabaseContext.Baggage.Add(newBaggage);
            activeDatabaseContext.SaveChanges();

            return newBaggage;
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public List<Baggage> GetAllBaggage(int customerProfileID)
        {
            return activeDatabaseContext.Baggage.Where(baggage => baggage.ProfileID == customerProfileID).ToList<Baggage>();
        }
        
        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Baggage? GetBaggage(int baggage_Tracking_ID, int customerProfileID)
        {
            return activeDatabaseContext.Baggage.FirstOrDefault(baggage => (baggage.Baggage_Tracking_ID == baggage_Tracking_ID && baggage.ProfileID == customerProfileID));
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public void DeleteBaggage(Baggage baggage)
        {
            activeDatabaseContext.Baggage.Remove(baggage);
            activeDatabaseContext.SaveChanges();
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Aircraft? PostAircraft(string aircraft_Type, int number_of_Seats)
        {
            // Create new:
            Aircraft newAircraft = new Aircraft();
            
            activeDatabaseContext.Aircrafts.Add(newAircraft);
            newAircraft.Aircraft_Type = aircraft_Type;
            newAircraft.Number_of_Seats = number_of_Seats;

            activeDatabaseContext.SaveChanges();

            return newAircraft;
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Aircraft? GetAircraft(int airplane_Registration_Code)
        {
            return activeDatabaseContext.Aircrafts.Find(airplane_Registration_Code);
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public void UpdateAircraft(Aircraft aircraft, string aircraft_Type, int number_of_Seats)
        {
            aircraft.Aircraft_Type = aircraft_Type;
            aircraft.Number_of_Seats = number_of_Seats;

            activeDatabaseContext.SaveChanges();
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Booking? PostBooking(int customerProfileID, int flight_Number)
        {
            // Create new:
            Booking newBooking = new Booking();
            
            activeDatabaseContext.Bookings.Add(newBooking);
            newBooking.ProfileID = customerProfileID;
            newBooking.Flight_Number = flight_Number;

            activeDatabaseContext.SaveChanges();

            return newBooking;
        }
        
        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public List<Booking> GetAllBookings(int customerProfileID)
        {
            return activeDatabaseContext.Bookings.Where(booking => booking.ProfileID == customerProfileID).ToList<Booking>();
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Booking? GetBooking(int seat_Number, int customerProfileID)
        {
            return activeDatabaseContext.Bookings.FirstOrDefault(booking => (booking.Seat_Number == seat_Number && booking.ProfileID == customerProfileID));
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public void DeleteBooking(Booking booking)
        {
            activeDatabaseContext.Bookings.Remove(booking);
            activeDatabaseContext.SaveChanges();
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Flight? PostFlight(int airplane_Registration_Code, string country_Name, string company_Name, string timeOfDeparture, string timeOfArrival, string destinationAirport, string departureAirport)
        {
            // Create new:
            Flight newFlight = new Flight();
            
            activeDatabaseContext.Flights.Add(newFlight);
            newFlight.Airplane_Registration_Code = airplane_Registration_Code;
            newFlight.Country_Name = country_Name;
            newFlight.Company_Name = company_Name;
            newFlight.TimeOfDeparture = timeOfDeparture;
            newFlight.TimeOfArrival = timeOfArrival;
            newFlight.DestinationAirport = destinationAirport;
            newFlight.DepartureAirport = departureAirport;

            activeDatabaseContext.SaveChanges();

            return newFlight;
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Flight? GetFlight(int flight_Number)
        {
            return activeDatabaseContext.Flights.FirstOrDefault(flight => flight.Flight_Number == flight_Number);
        }
        
        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public void UpdateFlight(Flight flight, int Airplane_Registration_Code, string Country_Name, string Company_Name, string TimeOfDeparture, string TimeOfArrival, string DestinationAirport, string DepartureAirport)
        {
            flight.Airplane_Registration_Code = Airplane_Registration_Code;
            flight.Country_Name = Country_Name;
            flight.Company_Name = Company_Name;
            flight.TimeOfDeparture = TimeOfDeparture;
            flight.TimeOfArrival = TimeOfArrival;
            flight.DestinationAirport = DestinationAirport;
            flight.DepartureAirport = DepartureAirport;

            activeDatabaseContext.SaveChanges();
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Report? PostReport(List<User> users)
        {
            // Create new:
            Report newReport = new Report();
            
            activeDatabaseContext.Reports.Add(newReport);
            newReport.users = users;

            activeDatabaseContext.SaveChanges();

            return newReport;
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Admin? PostAdmin(string FirstName, string LastName, string email, string username,
                                string password)
        {
            // Create new:
            Admin newAdmin = new Admin();
            newAdmin.FirstName = FirstName;
            newAdmin.LastName = LastName;
            newAdmin.email = email;
            newAdmin.username = username;
            newAdmin.password = password;
            
            activeDatabaseContext.Admins.Add(newAdmin);
            activeDatabaseContext.SaveChanges();

            return newAdmin;
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Admin? GetAdmin(int adminProfileID)
        {
            return activeDatabaseContext.Admins.Find(adminProfileID);
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Admin? GetAdmin(string username)
        {
            return activeDatabaseContext.Admins.FirstOrDefault(admin => admin.username == username);
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Admin? GetAdmin(string username, string password)
        {
            return activeDatabaseContext.Admins.FirstOrDefault(admin => (admin.username == username && admin.password == password));
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Country? PostCountry(string country_Name, string languages, string touristAttractions)
        {
            // Create new:
            Country newCountry = new Country();
            newCountry.Country_Name = country_Name;
            newCountry.Languages = languages;
            newCountry.TouristAttractions = touristAttractions;
            
            activeDatabaseContext.Countries.Add(newCountry);
            activeDatabaseContext.SaveChanges();

            return newCountry;
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public Country? GetCountry(string country_Name)
        {
            return activeDatabaseContext.Countries.Find(country_Name);
        }

        /** <summary> Inherited from Interface IFlightBoxRepository </summary> **/
        public bool SaveDBChanges()
        {
            return activeDatabaseContext.SaveChanges() >= 0;
        }
    }
}