using Application.DTO;
using Application.DTOs;
using Application.Interfaces;
using Application.Interfaces.Services;
using Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Services
{
    public class PizzaCreateService
    {
        private readonly IPizzaDbContext _context;

        private readonly ISaveService<SizeCostDTO, SizeCost> _sizeCostSaver;
        private readonly ISaveService<ProductDTO, Product> _productsSaver;

        private readonly CancellationToken _token = new CancellationToken();

        public PizzaCreateService(ISaveService<SizeCostDTO, SizeCost> sizeCostSaver, ISaveService<ProductDTO, Product> productsSaver, IPizzaDbContext context)
        {
            _sizeCostSaver = sizeCostSaver;
            _productsSaver = productsSaver;
            _context = context;
        }

        public async Task<Pizza> CreateAsync(PizzaCreateDTO value)
        {
            List<SizeCost> sizeCosts = await _sizeCostSaver.SaveAsync(value.SizeCosts);
            List<Product> products = await _productsSaver.SaveAsync(value.ConsistOf);

            Pizza pizza = new Pizza
            {
                Name = value.Name,
                ConsistOf = products,
                SizeCosts = sizeCosts
            };

            await _context.Pizzas.AddAsync(pizza);

            await _context.SaveChangesAsync(_token);

            return pizza;
        }
    }
}
