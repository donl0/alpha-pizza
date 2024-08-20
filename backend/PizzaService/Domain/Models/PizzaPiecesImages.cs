namespace Domain.Models
{
    public class PizzaPiecesImages
    {
        public Guid Id { get; set; }
        public Pizza Pizza { get; set; }
        public List<string> PiecesPath { get; set; }
        public int PiecePrice { get; set; }
    }
}
