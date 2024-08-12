namespace Domain.Models
{
    public class Topping
    {
        public Guid Id { get; set; }
        public Product Product { get; set; }
        public int Price { get; set; }
    }
}
