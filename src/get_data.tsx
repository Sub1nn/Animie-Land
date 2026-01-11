import axios from 'axios';

const api = 'https://api.jikan.moe/v4/anime';


export async function fetchAnimieData(): Promise<unknown> {
    try {
        const response = await axios.get(api);
        console.log(response)
        const animieList = response.data.data;
        const rand = Math.floor(Math.random() * animieList.length);
        const Animie = animieList[rand];
        return { image: Animie.images.jpg.image_url, title: Animie.title, description: Animie.synopsis };
    } catch (error) {
        console.error('Error fetching anime data:', error);
        throw error;
    }
}

