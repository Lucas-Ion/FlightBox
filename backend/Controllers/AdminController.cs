using Microsoft.AspNetCore.Mvc;
using FlightBox.Data;
using FlightBox.Models;

namespace FlightBox.Controllers
{
    /** <summary>
        This Controller handles HTTP Requests relating to general models
        stored in the database.
    </summary> **/

    [Route("api/[Controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IFlightBoxRepository activeRepository;

        public AdminController(IFlightBoxRepository repository)
        {
            activeRepository = repository;
        }

        // Endpoint 3:
        // POST api/admin/signup/customer
        [HttpPost("signup/customer")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Customer> PostNewCustomer(string FirstName, string LastName, string email, string username,
                                     string password, string creditCardNumber)
        {
            Customer? customer = activeRepository.GetCustomer(username);
            if (customer != null)
            {
                return BadRequest("ERROR: Customer Username is already taken!");
            }

            var newCustomer = activeRepository.PostCustomer(FirstName, LastName, email, username, password, creditCardNumber);
            string uriResponse = "Customer Created";

            var responseObject = new
            {
                ProfileID = "C" + newCustomer.ProfileID
            };

            return Created(uriResponse, responseObject);
        }

        // Endpoint 4:
        // POST api/admin/signup/airline
        [HttpPost("signup/airline")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Airline> PostNewAirline(string FirstName, string LastName, string email, string username,
                                     string password, string airlineCompanyName)
        {
            Airline? airline = activeRepository.GetAirline(username);
            if (airline != null)
            {
                return BadRequest("ERROR: Airline Username is already taken!");
            }

            var newAirline = activeRepository.PostAirline(FirstName, LastName, email, username, password, airlineCompanyName);
            string uriResponse = "Airline Created";

            var responseObject = new
            {
                ProfileID = "A" + newAirline.ProfileID
            };

            return Created(uriResponse, responseObject);
        }

        // Endpoint 5:
        // PUT api/admin/customer/{ProfileID}
        [HttpPut("customer/{ProfileID}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult UpdateCustomer(int ProfileID, string FirstName, string LastName, string email, string username,
                                     string password, string creditCardNumber)
        {            
            Customer? customer = activeRepository.GetCustomer(ProfileID);
            if (customer == null)
            {
                return BadRequest("ERROR: Customer ProfileID is INVALID!");
            }
            
            Customer? customerIDCheck = activeRepository.GetCustomer(username);
            if (customerIDCheck != null && !customer.Equals(customerIDCheck))
            {
                return BadRequest("ERROR: Customer Username is already taken!");
            }

            activeRepository.UpdateCustomer(customer, FirstName, LastName, email, username, password, creditCardNumber);

            return NoContent();
        }

        // Endpoint 6:
        // PUT api/admin/airline/{ProfileID}
        [HttpPut("airline/{ProfileID}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult UpdateAirline(int ProfileID, string FirstName, string LastName, string email, string username,
                                     string password, string airlineCompanyName)
        {
            Airline? airline = activeRepository.GetAirline(username);
            if (airline != null && !airline.username.Equals(username))
            {
                return BadRequest("ERROR: Airline Username is already taken!");
            }
            
            airline = activeRepository.GetAirline(ProfileID);
            if (airline == null)
            {
                return BadRequest("ERROR: Airline ProfileID is INVALID!");
            }

            activeRepository.UpdateAirline(airline, FirstName, LastName, email, username, password, airlineCompanyName);

            return NoContent();
        }

        // Endpoint 7: 
        // POST api/admin/report
        [HttpPost("{adminProfileID}/report")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Report> PostReport(int adminProfileID)
        {
            // If the airline does not exits, throw an exception:
            Admin admin = activeRepository.GetAdmin(adminProfileID);
            if (admin == null)
            {
                return BadRequest("ERROR: Admin ID " + adminProfileID + " is INVALID!");
            }

            // Retrieve all moves from the selected game:
            List<User> users = activeRepository.GetAllUsers();
            
            Report report = new Report();
            report.users = users;
            activeRepository.PostReport(users);
            activeRepository.SaveDBChanges();

            admin.reports.Add(report);
            activeRepository.SaveDBChanges();

            string uriResponse = "Report Created";

            return Created(uriResponse, report);
        }

        // Endpoint 8:
        // POST api/admin/customer/{customerProfileID}/baggage
        [HttpPost("customer/{customerProfileID}/baggage")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Baggage> PostNewBaggage(int customerProfileID, double weight)
        {
            Customer? customer = activeRepository.GetCustomer(customerProfileID);
            if (customer == null)
            {
                return BadRequest("ERROR: Customer ProfileID is INVALID!");
            }

            var newBaggage = activeRepository.PostBaggage(customerProfileID, weight);
            string uriResponse = "Baggage Created";

            var responseObject = new
            {
                Baggage_Tracking_ID = newBaggage.Baggage_Tracking_ID
            };

            return Created(uriResponse, responseObject);
        }

        // Endpoint 9:
        // DELETE api/admin/customer/{customerProfileID}/baggage
        [HttpDelete("customer/{customerProfileID}/baggage")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult DeleteBaggage(int customerProfileID, int Baggage_Tracking_ID)
        {
            Baggage? baggage = activeRepository.GetBaggage(Baggage_Tracking_ID, customerProfileID);
            if (baggage == null)
            {
                return BadRequest("ERROR: Baggage Tracking ID is INVALID!");
            }

            activeRepository.DeleteBaggage(baggage);

            return NoContent();
        }

        // Endpoint 10:
        // GET api/admin/customer/{customerProfileID}/baggage
        [HttpGet("customer/{customerProfileID}/baggage")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<List<Baggage>> GetBaggage(int customerProfileID)
        {
            List<Baggage> baggage = activeRepository.GetAllBaggage(customerProfileID);

            return Ok(baggage);
        }

        // Endpoint 11:
        // POST api/admin/booking
        [HttpPost("customer/{customerProfileID}/booking")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Booking> PostNewBooking(int customerProfileID, int Flight_Number)
        {
            Customer? customer = activeRepository.GetCustomer(customerProfileID);
            if (customer == null)
            {
                return BadRequest("ERROR: Customer ProfileID is INVALID!");
            }

            Flight? flight = activeRepository.GetFlight(Flight_Number);
            if (flight == null)
            {
                return BadRequest("ERROR: Flight ID is INVALID!");
            }

            var newBooking = activeRepository.PostBooking(customerProfileID, Flight_Number);
            string uriResponse = "Booking Created";

            var responseObject = new
            {
                Seat_Number = newBooking.Seat_Number
            };

            return Created(uriResponse, responseObject);
        }

        // Endpoint 12:
        // DELETE api/admin/customer/{customerProfileID}/booking
        [HttpDelete("customer/{customerProfileID}/booking")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult DeleteBooking(int customerProfileID, int Seat_Number)
        {
            Booking? booking = activeRepository.GetBooking(Seat_Number, customerProfileID);
            if (booking == null)
            {
                return BadRequest("ERROR: Baggage Tracking ID or Customer ID is INVALID!");
            }

            activeRepository.DeleteBooking(booking);

            return NoContent();
        }

        // Endpoint 13:
        // GET api/admin/customer/{customerProfileID}/booking
        [HttpGet("customer/{customerProfileID}/booking")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<List<Booking>> GetBooking(int customerProfileID)
        {
            Customer? customer = activeRepository.GetCustomer(customerProfileID);
            if (customer == null)
            {
                return BadRequest("ERROR: Customer ProfileID is INVALID!");
            }

            List<Booking> booking = activeRepository.GetAllBookings(customerProfileID);

            return Ok(booking);
        }
        
        // Endpoint 14:
        // POST api/admin/aircraft
        [HttpPost("aircraft")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Aircraft> PostNewAircraft(string Aircraft_Type, int Number_of_Seats)
        {
            var newAircraft = activeRepository.PostAircraft(Aircraft_Type, Number_of_Seats);
            string uriResponse = "Aircraft Created";

            var responseObject = new
            {
                Airplane_Registration_Code = newAircraft.Airplane_Registration_Code
            };

            return Created(uriResponse, responseObject);
        }

        // Endpoint 15:
        // GET api/admin/aircraft
        [HttpGet("aircraft")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Aircraft> GetAircraft(int Airplane_Registration_Code)
        {
            Aircraft aircraft = activeRepository.GetAircraft(Airplane_Registration_Code);
            if (aircraft == null)
            {
                return BadRequest("ERROR: Aircraft Airplane Registration Code is INVALID!");
            }

            return Ok(aircraft);
        }

        // Endpoint 16:
        // PUT api/admin/aircraft
        [HttpPut("aircraft")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult UpdateAircraft(int Airplane_Registration_Code, string Aircraft_Type, int Number_of_Seats)
        {
            Aircraft aircraft = activeRepository.GetAircraft(Airplane_Registration_Code);
            if (aircraft == null)
            {
                return BadRequest("ERROR: Aircraft Airplane Registration Code is INVALID!");
            }

            activeRepository.UpdateAircraft(aircraft, Aircraft_Type, Number_of_Seats);

            return NoContent();
        }

        // Endpoint 17:
        // POST api/admin/flight
        [HttpPost("flight")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Flight> PostNewFlight(int Airplane_Registration_Code, string Country_Name, string Company_Name,
                                     string TimeOfDeparture, string TimeOfArrival, string DestinationAirport, string DepartureAirport, double Price)
        {
            Airline? airline = activeRepository.GetAirlineWithCompanyName(Company_Name);
            if (airline == null)
            {
                return BadRequest("ERROR: Airline Company Name does not Exist!");
            }

            Aircraft? aircraft = activeRepository.GetAircraft(Airplane_Registration_Code);
            if (aircraft == null)
            {
                return BadRequest("ERROR: Aircraft Airplane Registration Code is INVALID!");
            }

            var newFlight = activeRepository.PostFlight(Airplane_Registration_Code, Country_Name, Company_Name, TimeOfDeparture, TimeOfArrival, DestinationAirport, DepartureAirport, Price);
            string uriResponse = "Flight Created";

            var responseObject = new
            {
                Flight_Number = newFlight.Flight_Number
            };

            return Created(uriResponse, responseObject);
        }

        // Endpoint 18:
        // GET api/admin/customer/flight
        [HttpGet("flight")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Flight> GetFlight(int flight_Number)
        {
            Flight flight = activeRepository.GetFlight(flight_Number);
            if (flight == null)
            {
                return BadRequest("ERROR: Flight Number is INVALID!");
            }

            return Ok(flight);
        }

        // Endpoint 19:
        // PUT api/admin/customer/flight
        [HttpPut("flight")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult UpdateFlight (int flight_Number, int Airplane_Registration_Code, string Country_Name, string Company_Name,
                                     string TimeOfDeparture, string TimeOfArrival, string DestinationAirport, string DepartureAirport, double Price)
        {  
            Airline? airline = activeRepository.GetAirlineWithCompanyName(Company_Name);
            if (airline == null)
            {
                return BadRequest("ERROR: Airline Company Name does not Exist!");
            }

            Aircraft? aircraft = activeRepository.GetAircraft(Airplane_Registration_Code);
            if (aircraft == null)
            {
                return BadRequest("ERROR: Aircraft Airplane Registration Code is INVALID!");
            }

            Flight? flight = activeRepository.GetFlight(flight_Number);
            if (flight == null)
            {
                return BadRequest("ERROR: Flight Number is INVALID!");
            }

            activeRepository.UpdateFlight(flight, Airplane_Registration_Code, Country_Name, Company_Name,
                                          TimeOfDeparture, TimeOfArrival, DestinationAirport, DepartureAirport, Price);

            return NoContent();
        }

        // Endpoint 20:
        // POST api/admin
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Admin> PostNewAdmin(string FirstName, string LastName, string email, string username,
                                     string password)
        {
            Admin? admin = activeRepository.GetAdmin(username);
            if (admin != null)
            {
                return BadRequest("ERROR: Admin Username is already taken!");
            }

            var newAdmin = activeRepository.PostAdmin(FirstName, LastName, email, username, password);
            string uriResponse = "Admin Created";

            var responseObject = new
            {
                ProfileID = "Admin ID: " + newAdmin.ProfileID
            };

            return Created(uriResponse, responseObject);
        }

        // Endpoint 22:
        // POST api/admin/country
        [HttpPost("country")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Country> PostCountry(string Country_Name, string languages, string touristAttractions)
        {
            Country? country = activeRepository.GetCountry(Country_Name);
            if (country != null)
            {
                return BadRequest("ERROR: Country Name is already exists!");
            }

            var newCountry = activeRepository.PostCountry(Country_Name, languages, touristAttractions);
            string uriResponse = "Country Created";

            var responseObject = new
            {
                Country_Name = newCountry.Country_Name
            };

            return Created(uriResponse, responseObject);
        }

        // Endpoint 23:
        // GET api/admin/country
        [HttpGet("country")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Country> GetCountry(string Country_Name)
        {
            Country? country = activeRepository.GetCountry(Country_Name);
            if (country == null)
            {
                return BadRequest("ERROR: Country Name does not exists!");
            }

            return Ok(country);
        }

        // Endpoint 24:
        // GET api/admin/customer/flight/search
        [HttpGet("flight/search")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Flight> SearchFlight(string TimeOfDeparture, string TimeOfArrival, string DepartureAirport, string DestinationAirport)
        {
            List<Flight> flights = activeRepository.SearchFlights(TimeOfDeparture, TimeOfArrival, DepartureAirport, DestinationAirport);

            var responseObject = new
            {
                flightResults = flights
            };
            
            return Ok(responseObject);
        }

        // Endpoint 25:
        // GET api/admin/airline/flights
        [HttpGet("airline/{airlineProfileID}/flights")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Flight> GetAllFlightsFromAirline(int airlineProfileID)
        {
            Airline? airline = activeRepository.GetAirline(airlineProfileID);
            if (airline == null)
            {
                return BadRequest("ERROR: Customer ProfileID is INVALID!");
            }

            List<Flight> flights = activeRepository.GetAllFlights(airline.airlineCompanyName);
            
            return Ok(flights);
        }
    }
}