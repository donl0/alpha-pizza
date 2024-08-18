export const makeImagePath = (currentPath, baseUrl) => {
    const dotNetFolder = 'wwwroot/';
    const formattedPath = currentPath.replace(/\\/g, '/').replace(dotNetFolder, '');

    const result = baseUrl +  formattedPath;

    return result;
}