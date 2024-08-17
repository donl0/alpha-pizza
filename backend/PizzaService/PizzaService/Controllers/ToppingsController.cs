using Application.Interfaces;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzaService.DTOs;
using PizzaService.Services;

namespace PizzaService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToppingsController : ControllerBase
    {
        private readonly IPizzaDbContext _context;
        private readonly IImageSaver _imageSaver;

        private readonly CancellationToken _token = new CancellationToken();

        public ToppingsController(IPizzaDbContext context, IImageSaver imageSaver)
        {
            _context = context;
            _imageSaver = imageSaver;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Topping>>> Get()
        {
            IEnumerable<Topping> toppings = await _context.Toppings.AsNoTracking().ToListAsync();

            if (toppings.Count() > 0)
            {
                return Ok(toppings);
            }

            return NotFound();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Topping>> Get(Guid id)
        {
            Topping topping = await _context.Toppings.FirstOrDefaultAsync(t => t.Id == id);

            if (topping != null)
            {
                return Ok(topping);
            }

            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> Post([FromBody] ToppingDTO value)
        {
            string imagePath = await _imageSaver.Save(value.Image);

            Topping topping = new Topping
            {
                Name = value.Name,
                Price = value.Price,
                Image = imagePath
            };

            _context.Toppings.Add(topping);

            _context.SaveChangesAsync(_token);

            return Ok(topping.Id);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Guid>> Delete(Guid id)
        {
            Topping topping = await _context.Toppings.FirstOrDefaultAsync(t => t.Id == id);

            if (topping != null)
            {
                _context.Toppings.Remove(topping);

                await _context.SaveChangesAsync(_token);

                return Ok(id);
            }

            return NotFound();
        }
    }
}
