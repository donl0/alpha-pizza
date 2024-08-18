using Domain.Models;

namespace PizzaService.DTOs
{
    public class ToppingDTO
    {
        public string Name { get; set; }
        public int Price { get; set; }
        public IFormFile Image { get; set; }
    }
}
