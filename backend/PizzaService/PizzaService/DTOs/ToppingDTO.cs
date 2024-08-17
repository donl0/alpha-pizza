using Domain.Models;

namespace PizzaService.DTOs
{
    public class ToppingDTO : Product
    {
        public int Price { get; set; }
        public IFormFile Image { get; set; }
    }
}
