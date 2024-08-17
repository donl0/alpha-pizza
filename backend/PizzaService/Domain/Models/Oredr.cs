namespace Domain.Models
{
    public class Order
    {
        public Guid Id { get; set; }
        public Pizza Pizza { get; set; }
        public int Size { get; set; }
        public int FinalPrise { get; set; }
        public List<ToppingCount> Toppings { get; set; }
        public DateTime Date { get; set; }
    }
}
