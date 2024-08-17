namespace PizzaService.DTOs
{
    public class OrderDTO
    {
        public Guid PizzaId { get; set; }
        public int FinalPrise { get; set; }
        public int Size { get; set; }
        public List<ToppingCountDTO> Toppings { get; set; }
        public DateTime Date { get; set; }
    }
}
