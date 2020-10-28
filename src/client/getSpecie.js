import axios from 'axios';

export async function getSpecie(specieId) {

    const resp = await axios.get(`https://swapi.py4e.com/api/species/${specieId}`);
    const { name, average_height, language, hair_colors, skin_colors, designation } = await resp.data;

    return {
        name,
        designation,
        average_height,
        language,
        hair_colors,
        skin_colors
    };

}
