using Application.Interfaces;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PizzaService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IPizzaDbContext _context;

        private readonly CancellationToken _token = new CancellationToken();

        public ProductsController(IPizzaDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Product>>> Get()
        {
            List<Product> products = await _context.Products.AsNoTracking().ToListAsync();

            if (products.Count > 0)
            {
                return Ok(products);
            }

            return NotFound();
        }
    }
}
