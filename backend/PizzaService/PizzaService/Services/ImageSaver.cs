﻿namespace PizzaService.Services
{
    public class ImageSaver: IImageSaver
    {
        private readonly IConfiguration _config;

        public ImageSaver(IConfiguration config)
        {
            _config = config;
        }

        public async Task<string> Save(IFormFile file, string fileExtension)
        {
            var filePath = Path.Combine(
                                _config["StoredPizzaImagesPath"],
                                Path.GetRandomFileName() +
                                fileExtension
                                );

            using (var stream = System.IO.File.Create(filePath))
            {
                await file.CopyToAsync(stream);
            }

            return filePath;
        }
    }
}
