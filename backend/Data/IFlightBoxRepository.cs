using FlightBox.Models;

namespace FlightBox.Data
{
    public interface IFlightBoxRepository
    {
        /** <summary>
            This method creates a customer and saves that customer to the repository.
        </summary>
        <returns>
            Newly created instance of the customer that was saved.
        </returns>**/
        Customer PostCustomer(string FirstName, string LastName, string email, string username,
                                     string password, string creditCardNumber);

        /** <summary>
            This method creates an airline and saves that airline to the repository.
        </summary>
        <returns>
            Newly created instance of the airline that was saved.
        </returns>**/
        Airline PostAirline(string FirstName, string LastName, string email, string username,
                                     string password, string airlineCompanyName);
        
        /** <summary>
            Gets the customer that has the matching username and password.
        </summary>
        <returns>
            Found instance of the customer.
        </returns>**/                             
        Customer? GetCustomer(string username, string password);
        Customer? GetCustomer(string username);
        Customer? GetCustomer(int profileID);
        
        /** <summary>
            Gets the airline that has the matching username.
        </summary>
        <returns>
            Found instance of the airline.
        </returns>**/  
        Airline? GetAirline(string username);
        Airline? GetAirline(string username, string password);
        Airline? GetAirline(int profileID);
        Airline? GetAirlineWithCompanyName(string company_Name);

        /** <summary>
            Updates the airline to match updated user info.
        </summary>**/
        void UpdateAirline(Airline airline, string firstName, string lastName, string email, string username, string password, string airlineCompanyName);
        
        /** <summary>
            Updates the customer to match updated user info.
        </summary>**/
        void UpdateCustomer(Customer? customer, string firstName, string lastName, string email, string username, string password, string creditCardNumber);

        /** <summary>
            This method creates baggage and saves that baggage to the repository.
        </summary>
        <returns>
            Newly created instance of the baggage that was saved.
        </returns>**/
        Baggage PostBaggage(int customerProfileID, double weight);
        
        /** <summary>
            Gets the baggage that has the matching id.
        </summary>
        <returns>
            Found instance of the airline.
        </returns>**/
        List<Baggage> GetAllBaggage(int customerProfileID);
        Baggage? GetBaggage(int baggage_Tracking_ID, int customerProfileID);

        /** <summary>
            Deletes the baggage specified.
        </summary>**/
        void DeleteBaggage(Baggage baggage);
        
        /** <summary>
            This method creates aircraft and saves that aircraft to the repository.
        </summary>
        <returns>
            Newly created instance of the aircraft that was saved.
        </returns>**/
        Aircraft? PostAircraft(string aircraft_Type, int number_of_Seats);

        /** <summary>
            Updates the aircraft to match updated information given.
        </summary>**/
        void UpdateAircraft(Aircraft aircraft, string aircraft_Type, int number_of_Seats);
        
        /** <summary>
            Gets the aircraft that has the matching id.
        </summary>
        <returns>
            Found instance of the aircraft.
        </returns>**/
        Aircraft? GetAircraft(int airplane_Registration_Code);

        /** <summary>
            This method creates booking and saves that booking to the repository.
        </summary>
        <returns>
            Newly created instance of the booking that was saved.
        </returns>**/
        Booking? PostBooking(int customerProfileID, int flight_Number);
        
        /** <summary>
            Gets the booking that has the matching id.
        </summary>
        <returns>
            Found instance of the booking.
        </returns>**/
        List<Booking> GetAllBookings(int customerProfileID);
        Booking? GetBooking(int seat_Number, int customerProfileID);
        
        /** <summary>
            Deletes the booking specified.
        </summary>**/
        void DeleteBooking(Booking booking);

        /** <summary>
            This method creates flight and saves that flight to the repository.
        </summary>
        <returns>
            Newly created instance of the flight that was saved.
        </returns>**/
        Flight? PostFlight(int airplane_Registration_Code, string country_Name, string company_Name, string timeOfDeparture, string timeOfArrival, string destinationAirport, string departureAirport, double price);

        /** <summary>
            Updates the flight to match updated information given.
        </summary>**/
        void UpdateFlight(Flight flight, int Airplane_Registration_Code, string Country_Name, string Company_Name,
                                     string TimeOfDeparture, string TimeOfArrival, string DestinationAirport, string DepartureAirport, double price);

        /** <summary>
            Gets the flight that has the matching id.
        </summary>
        <returns>
            Found instance of the flight.
        </returns>**/
        Flight? GetFlight(int flight_Number);
        List<Flight?> SearchFlights(string timeOfDeparture, string timeOfArrival, string departureAirport, string destinationAirport);
        List<Flight?> GetAllFlights(string company_name);
        
        /** <summary>
            This method creates a report and saves that report to the repository.
        </summary>
        <returns>
            Newly created instance of the report.
        </returns>**/
        Report? PostReport(List<User> users);

        /** <summary>
            This method creates a admin and saves that admin to the repository.
        </summary>
        <returns>
            Newly created instance of the admin.
        </returns>**/
        Admin? PostAdmin(string FirstName, string LastName, string email, string username,
                                string password);

        /** <summary>
            Gets the admin that has the matching id.
        </summary>
        <returns>
            Found instance of the admin.
        </returns>**/
        Admin? GetAdmin(int adminProfileID);
        Admin? GetAdmin(string username, string password);
        Admin? GetAdmin(string username);

        /** <summary>
            This method creates a country and saves that country to the repository.
        </summary>
        <returns>
            Newly created instance of the country.
        </returns>**/
        Country? PostCountry(string country_Name,  string languages, string touristAttractions);

        /** <summary>
            Gets the country that has the matching id.
        </summary>
        <returns>
            Found instance of the country.
        </returns>**/
        Country? GetCountry(string country_Name);

        /** <summary>
            This method saves all changes to the repository.
        </summary>
        <returns>
            Save status
        </returns>**/
        bool SaveDBChanges();
    }
}