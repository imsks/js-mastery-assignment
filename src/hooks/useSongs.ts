import { Method } from "axios"
import { useEffect, useState } from "react"
import { ChartSong, ChartSongsResponse } from "../interfaces"
import { fetchSongsData } from "../utils"

export const useSongs = () => {
    const [songs, setSongs] = useState([] as Array<ChartSong>)

    const fetchData = async () => {
        let method: Method = "GET"

        const options = {
            method: method,
            url: `${process.env.REACT_APP_RAPID_API_SHAZAM_BASE_ENDPOINT}/charts/track`,
            params: { locale: "en-US", pageSize: "20", startFrom: "0" },
            headers: {
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
                "x-rapidapi-host": process.env.REACT_APP_RAPID_API_SHAZAM_HOST,
            },
        }

        const response = (await fetchSongsData(options)) as ChartSongsResponse

        const songsList = response.tracks.map((song) => {
            const { title, images, subtitle, url } = song

            return {
                name: title,
                imageUrl: images.coverart,
                artist: subtitle,
                url,
            } as ChartSong
        })

        setSongs(songsList)
    }

    useEffect(() => {
        fetchData()
    }, [songs])

    return songs
}
