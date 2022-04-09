using Microsoft.AspNetCore.Mvc;
using FlightBox.Data;
using FlightBox.Models;

namespace FlightBox.Controllers
{
    /** <summary>
        This Controller handles HTTP Requests relating to login information
        stored in the database.
    </summary> **/

    [Route("api/[Controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IFlightBoxRepository activeRepository;

        public LoginController(IFlightBoxRepository repository)
        {
            activeRepository = repository;
        }

        // Endpoint 1:
        // GET api/login/customer
        [HttpGet("customer")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Customer> CustomerLogin(string username, string password)
        {
            // If customer does not exits, throw an error:
            Customer? customer = activeRepository.GetCustomer(username, password);
            if (customer == null)
            {
                return BadRequest("ERROR: Customer Login is INVALID!");
            }

            return Ok(customer);
        }

        // Endpoint 2:
        // GET api/login/airline
        [HttpGet("airline")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Airline> AirlineLogin(string username, string password)
        {
            // If airline does not exits, throw an error:
            Airline? airline = activeRepository.GetAirline(username, password);
            if (airline == null)
            {
                return BadRequest("ERROR: Airline Login is INVALID!");
            }

            return Ok(airline);
        }

        // Endpoint 21:
        // GET api/login/admin
        [HttpGet("admin")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Admin> AdminLogin(string username, string password)
        {
            Admin? admin = activeRepository.GetAdmin(username, password);
            if (admin == null)
            {
                return BadRequest("ERROR: Admin Login is INVALID!");
            }

            var newAdmin = activeRepository.GetAdmin(username, password);

            return Ok(newAdmin);
        }
    }
}