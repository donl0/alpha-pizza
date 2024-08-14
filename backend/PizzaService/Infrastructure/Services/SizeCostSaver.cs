using Application.DTO;
using Application.Interfaces;
using Application.Interfaces.Services;
using Domain.Models;

namespace Infrastructure.Services
{
    internal class SizeCostSaver : ISaveService<SizeCostDTO, SizeCost>
    {
        private readonly IPizzaDbContext _pizzaDbContext;

        private readonly CancellationToken _cancellationToken = new CancellationToken();

        public SizeCostSaver(IPizzaDbContext pizzaDbContext)
        {
            _pizzaDbContext = pizzaDbContext;
        }

        public async Task<SizeCost> SaveAsync(SizeCostDTO value)
        {
            SizeCost sizeCost = new SizeCost
            {
                Size = value.Size,
                Cost = value.Cost
            };

            await _pizzaDbContext.SizeCosts.AddAsync(sizeCost);
            await _pizzaDbContext.SaveChangesAsync(_cancellationToken);

            return sizeCost;
        }

        public async Task<List<SizeCost>> SaveAsync(ICollection<SizeCostDTO> values)
        {
            List<SizeCost> sizeCosts = new List<SizeCost>();

            foreach (var item in values)
            {
                SizeCost sizeCost = new SizeCost
                {
                    Size = item.Size,
                    Cost = item.Cost
                };

                sizeCosts.Add(sizeCost);
            }

            await _pizzaDbContext.SizeCosts.AddRangeAsync(sizeCosts);
            await _pizzaDbContext.SaveChangesAsync(_cancellationToken);

            return sizeCosts;
        }
    }
}
