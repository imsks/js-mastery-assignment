import axios from "axios"

export const fetchSongsData = async (options: any) => {
    try {
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.error(error)
    }
}
