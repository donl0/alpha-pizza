using Application.Common.Validation;
using System.ComponentModel.DataAnnotations;

namespace PizzaService.DTOs
{
    public class PizzaImagesUpdateDTO
    {
        [Required]
        public IFormFile MainImage { get; set; }

        [Required]
        [ListLength(8, ErrorMessage = "The Pieces list must contain exactly 8 items.")]
        public List<IFormFile> Pieces { get; set; }

        [Required]
        public int Price { get; set; }
    }
}
