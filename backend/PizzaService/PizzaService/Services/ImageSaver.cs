using Infrastructure.DTOs;
using PizzaService.DTOs;

namespace PizzaService.Services
{
    public sealed class ImageSaver
    {
        private readonly PizzaImagesUpdateDTO _imagesContainer;
        private readonly IConfiguration _config;
        private readonly string _fileExtension;

        public ImageSaver(PizzaImagesUpdateDTO imagesContainer, IConfiguration config, string fileExtension)
        {
            _imagesContainer = imagesContainer;
            _config = config;
            _fileExtension = fileExtension;
        }

        public async Task<PizzaImagesPathsDTO> Save()
        {
            PizzaImagesPathsDTO pathsContainer = new PizzaImagesPathsDTO();

            pathsContainer.MainImagePath = await Save(_imagesContainer.MainImage);

            await SavePieces(_imagesContainer.Pieces, pathsContainer);

            return pathsContainer;
        }

        private async Task SavePieces(List<IFormFile> files, PizzaImagesPathsDTO pathsContainer) {

            List<string> piecesPaths = new List<string>();

            foreach (var item in files)
            {
                piecesPaths.Add(await Save(item));
            }

            pathsContainer.Paths = piecesPaths;
        }

        private async Task<string> Save(IFormFile file)
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
