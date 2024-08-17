﻿using Application.Interfaces;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzaService.DTOs;
using PizzaService.Services;

namespace PizzaService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IPizzaDbContext _context;

        private readonly CancellationToken _token = new CancellationToken();

        public OrdersController(IPizzaDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> Get()
        {
            IEnumerable<Order> orders = await _context.Orders.AsNoTracking().ToListAsync();

            if (orders.Count() > 0)
            {
                return Ok(orders);
            }

            return NotFound();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> Get(Guid id)
        {
            Order order = await _context.Orders.FirstOrDefaultAsync(o => o.Id == id);

            if (order != null)
            {
                return Ok(order);
            }

            return NotFound(nameof(order));
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> Post([FromBody] OrderDTO value)
        {
            List<ToppingCount> existToppings = new List<ToppingCount>();

            foreach (var item in value.Toppings)
            {
                Topping topping = await _context.Toppings.FirstOrDefaultAsync(t => t.Id == item.ToppingId);

                if (topping != null)
                {
                    ToppingCount toppingCount = new ToppingCount
                    {
                        Topping = topping,
                        Count = item.Count
                    };

                    _context.ToppingsCount.Add(toppingCount);

                    existToppings.Add(toppingCount);
                }
                else {
                    return NotFound(nameof(topping));
                     }
            }

            Pizza pizza = await _context.Pizzas.FirstOrDefaultAsync(p => p.Id == value.PizzaId);

            if (pizza != null)
            {
                int finalPrise = CalculatePrise(existToppings, value.Size, pizza.SizeCosts);

                Order order = new Order
                {
                    Pizza = pizza,
                    Size = value.Size,
                    FinalPrise = finalPrise,
                    Toppings = existToppings,
                    Date = DateTime.UtcNow
                };

                await _context.Orders.AddAsync(order);

                _context.SaveChangesAsync(_token);
            }

            return NotFound(nameof(pizza));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Guid>> Delete(Guid id)
        {

        }

        [NonAction]
        private int CalculatePrise(List<ToppingCount> toppings, int size, List<SizeCost> sizeCosts)
        {
            int finalPrise = 0;

            int sizePrice = sizeCosts.FirstOrDefault(s => s.Size == size).Cost;

            finalPrise += sizePrice;

            foreach (var item in toppings)
            {
                finalPrise += item.Topping.Price * item.Count;
            }

            return finalPrise;
        }
    }
}
