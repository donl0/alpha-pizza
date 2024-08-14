using Application.DTOs;
using Application.Interfaces;
using Domain.Models;
using Infrastructure.Exceptions;
using Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzaService.DTOs;
using PizzaService.Services;

namespace PizzaService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzasController : ControllerBase
    {
        private readonly PizzaCreateService _pizzaCrateService;
        private readonly PizzaUpdateImageService _pizzaUpdateImageService;

        private readonly IPizzaDbContext _context;

        private readonly IConfiguration _config;

        private readonly CancellationToken _token = new CancellationToken();

        public PizzasController(IConfiguration config, PizzaCreateService pizaRepository, IPizzaDbContext context, PizzaUpdateImageService pizzaUpdateImageService)
        {
            _config = config;
            _pizzaCrateService = pizaRepository;
            _context = context;
            _pizzaUpdateImageService = pizzaUpdateImageService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pizza>>> Get()
        {
            ICollection<Pizza> pizzas = await _context.Pizzas.Include(p => p.SizeCosts).Include(p => p.ConsistOf).AsNoTracking().ToListAsync();

            if (pizzas.Count > 0)
            {
                return Ok(pizzas);
            }

            return NotFound();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Pizza>> Get(Guid id)
        {
            Pizza result = await _context.Pizzas.SingleOrDefaultAsync(p => p.Id == id);

            if (result != null)
            {
                return Ok(result);
            }
            return NotFound();
        }

        [HttpPost()]
        public async Task<ActionResult<Guid>> Post([FromBody] PizzaCreateDTO value)
        {
            Pizza pizza = await _pizzaCrateService.CreateAsync(value);

            return Ok(pizza.Id);
        }

        [HttpPost("updateImages")]
        public async Task<ActionResult<Guid>> Post([FromForm] Guid id, PizzaImagesUpdateDTO value) {
            try
            {
                string fileExtension = ".png";

                await _pizzaUpdateImageService.Update(id, new ImageSaver(value, _config, fileExtension).Save);
            }
            catch (NotFoundException ex)
            {
                return NotFound();
            }


            return Ok(id);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Guid>> Delete(Guid id)
        {
            Pizza pizza = await _context.Pizzas.FirstOrDefaultAsync(p => p.Id == id);

            if (pizza != null)
            {
                _context.Pizzas.Remove(pizza);
                await _context.SaveChangesAsync(_token);

                return id;
            }

            return NotFound(id);
        }
    }
}
