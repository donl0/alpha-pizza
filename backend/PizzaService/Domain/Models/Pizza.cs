namespace Domain.Models
{
    public class Pizza
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public List<Product> ConsistOf { get; set; }
        public List<SizeCost> SizeCosts { get; set; }
        public string? ImagePath { get; set; }
    }
}
