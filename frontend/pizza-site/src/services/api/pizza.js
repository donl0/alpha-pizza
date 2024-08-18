const BASE_URL = "https://localhost:7176/";
const BASE_URL_API = BASE_URL+"api";

export const getLastOrders = async () => {
    const responce = await fetch(`${BASE_URL_API}/Orders`);

    let parsed = await responce.json();

    for (let index = 0; index < parsed.length; index++) {
        const formattedPath = parsed[index]["pizza"]["imagePath"].replace(/\\/g, '/').replace('wwwroot/', '');

        parsed[index]["pizza"]["imagePath"] = BASE_URL +  formattedPath;
        
    }
    
    return parsed;
}