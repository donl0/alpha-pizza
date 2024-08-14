namespace PizzaService.DTOs
{
    public class PizzaImagesUpdateDTO
    {
        public IFormFile MainImage { get; set; }
        public List<IFormFile> Pieces { get; set; }
    }
}
