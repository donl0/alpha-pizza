using Application.DTO;
using Application.Interfaces;
using Application.Interfaces.Services;
using Domain.Models;

namespace Infrastructure.Services
{
    internal class ProductCostSaver : ISaveService<ProductDTO, Product>
    {
        private readonly IPizzaDbContext _pizzaDbContext;

        private readonly CancellationToken _cancellationToken = new CancellationToken();

        public ProductCostSaver(IPizzaDbContext pizzaDbContext)
        {
            _pizzaDbContext = pizzaDbContext;
        }

        public async Task<Product> SaveAsync(ProductDTO value)
        {
            Product product = new Product
            {
                Name = value.Name,
            };

            await _pizzaDbContext.Products.AddAsync(product);
            await _pizzaDbContext.SaveChangesAsync(_cancellationToken);

            return product;
        }

        public async Task<List<Product>> SaveAsync(ICollection<ProductDTO> values)
        {
            List<Product> products = new List<Product>();

            foreach (var item in values)
            {
                Product product = new Product
                {
                    Name = item.Name,
                };

                products.Add(product);
            }

            await _pizzaDbContext.Products.AddRangeAsync(products);
            await _pizzaDbContext.SaveChangesAsync(_cancellationToken);

            return products;
        }
    }
}
