using Application.Interfaces;
using Domain.Models;
using Infrastructure.DTOs;
using Infrastructure.Exceptions;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Services
{
    public class PizzaUpdateImageService
    {
        private IPizzaDbContext _context;

        private readonly CancellationToken _token = new CancellationToken();

        public PizzaUpdateImageService(IPizzaDbContext context)
        {
            _context = context;
        }

        public async Task Update(Guid id, Func<Task<PizzaImagesPathsDTO>> generateImages)
        {
            Pizza pizza = await _context.Pizzas.FirstOrDefaultAsync(p => p.Id == id);

            if (pizza == null)
            {
                throw new NotFoundException(typeof(Pizza).ToString(), id);
            }

            PizzaImagesPathsDTO pathsContainer = await generateImages();

            pizza.ImagePath = pathsContainer.MainImagePath;

            PizzaPiecesImages pizzaPiecesImages = new PizzaPiecesImages
            {
                PiecesPath = pathsContainer.Paths
            };

            pizzaPiecesImages.Pizza = pizza;

            await _context.PizzaPiecesImages.AddAsync(pizzaPiecesImages);

            await _context.SaveChangesAsync(_token);
        }
    }
}
