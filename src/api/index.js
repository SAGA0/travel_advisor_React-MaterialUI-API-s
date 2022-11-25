import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Key': '33031b42b4msh6e3da2a6cf504c5p105382jsnbdf7a4012e7e',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

export const getPlaces = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': '33031b42b4msh6e3da2a6cf504c5p105382jsnbdf7a4012e7e',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })

        return data

    } catch (error) {
        console.log(error)
    }
}