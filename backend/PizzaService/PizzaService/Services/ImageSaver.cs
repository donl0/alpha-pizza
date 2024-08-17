namespace PizzaService.Services
{
    public class ImageSaver: IImageSaver
    {
        private readonly IConfiguration _config;
        private readonly string _fileExtension;

        public ImageSaver(IConfiguration config, string fileExtension)
        {
            _config = config;
            _fileExtension = fileExtension;
        }

        public async Task<string> Save(IFormFile file)
        {
            var filePath = Path.Combine(
                                _config["StoredPizzaImagesPath"],
                                Path.GetRandomFileName() +
                                _fileExtension
                                );

            using (var stream = System.IO.File.Create(filePath))
            {
                await file.CopyToAsync(stream);
            }

            return filePath;
        }
    }
}
