namespace PizzaService.Services
{
    public interface IImageSaver
    {
        public Task<string> Save(IFormFile file);
    }
}