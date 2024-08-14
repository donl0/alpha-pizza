using Application.DTO;

namespace Application.DTOs
{
    public class PizzaCreateDTO
    {
        public string Name { get; set; }
        public List<ProductDTO> ConsistOf { get; set; }
        public List<SizeCostDTO> SizeCosts { get; set; }
    }
}
