using Application.Interfaces;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace PizzaService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaPiecesImagesController : ControllerBase
    {
        private readonly IPizzaDbContext _context;

        public PizzaPiecesImagesController(IPizzaDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<PizzaPiecesImages>>> Get()
        {
            List<PizzaPiecesImages> result = await _context.PizzaPiecesImages.Include(p => p.Pizza).ThenInclude(p => p.ConsistOf).Include(o => o.Pizza)
             .ThenInclude(p => p.SizeCosts).ToListAsync();

            if (result.Count > 0)
            {
                return Ok(result);
            }

            return NotFound();
        }

        [HttpGet("{pizzaId}")]
        public async Task<ActionResult<PizzaPiecesImages>> Get(Guid pizzaId)
        {
            PizzaPiecesImages result = await _context.PizzaPiecesImages.Include(p => p.Pizza).ThenInclude(p => p.ConsistOf).Include(o => o.Pizza)
             .ThenInclude(p => p.SizeCosts).FirstOrDefaultAsync(p => p.Pizza.Id == pizzaId);

            if (result != null)
            {
                return Ok(result);
            }

            return NotFound();
        }
    }
}
