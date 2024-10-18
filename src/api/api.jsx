import axios from "axios";

const API_KEY = 'PkPmxkAJv_LIqca5P1db3PvPvOX7aeLR882S4hdzO1E';

const BASIC_URL = 'https://api.unsplash.com/search/photos';

const getPhotos = async (query, page, per_page = 12) => {
    try {
        const response = await axios.get(BASIC_URL, {
            params: {
                client_id: API_KEY,
                orientation: "landscape",
                query,
                page,
                per_page,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching photos:", error);
        throw error;
    }
};

export default getPhotos;