namespace Domain.Models
{
    public class Order
    {
        public Guid Id { get; set; }
        public Pizza Pizza { get; set; }
        public int FinalPrise { get; set; }
        public List<Topping> Toppings { get; set; }
        public DateTime Date { get; set; }
    }
}
