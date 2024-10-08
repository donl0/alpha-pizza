﻿using Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Application.Interfaces
{
    public interface IPizzaDbContext
    {
        DbSet<Order> Orders { get; set; }
        DbSet<Pizza> Pizzas { get; set; }
        DbSet<Product> Products { get; set; }
        DbSet<SizeCost> SizeCosts { get; set; }
        DbSet<Topping> Toppings { get; set; }
        DbSet<PizzaPiecesImages> PizzaPiecesImages { get; set; }
        DbSet<ToppingCount> ToppingsCount { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
