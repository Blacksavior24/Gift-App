export const getGifts = async (category) =>{
    //LA URL DE LA API
    const apikey = '64B89vXRrHWq58CuWzYtb7AMCM6ozA6S'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${category}&limit=10`
    

    // TRAE LA DATA DE LA API
    const resp = await fetch(url);
    // LA CONVIERTE EN JSON, EN OBJETO {}
    const {data} = await resp.json();

    //MANIPULAMOS LA DATA PARA EL FRONTEND
    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}