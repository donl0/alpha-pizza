using Application.DTO;
using Application.Interfaces;
using Application.Interfaces.Services;
using Domain.Models;
using Infrastructure.Db;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure
{
    public static class DepenedncyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration["DbConnection"];

            services.AddDbContext<IPizzaDbContext, PizzaDbContext>(options =>
            {
                options.UseNpgsql(connectionString);
            });

            services.AddTransient<ISaveService<SizeCostDTO, SizeCost>, SizeCostSaver>();
            services.AddTransient<ISaveService<ProductDTO, Product>, ProductCostSaver>();
            services.AddTransient<PizzaUpdateImageService>();
            services.AddTransient<PizzaCreateService>();

            return services;
        }

        public async static Task MakeMigrations(this IServiceProvider services) {
            using (var scope = services.CreateScope())
            {
                PizzaDbContext dbContext = (PizzaDbContext)scope.ServiceProvider.GetRequiredService<IPizzaDbContext>();
                var migrator = dbContext.Database.GetService<IMigrator>();
                await migrator.MigrateAsync();
            }
        }
    }
}
