import { Method } from "axios"
import { useEffect, useState } from "react"
import { ChartSong, ChartSongFromAPIs, ChartSongsResponse } from "../interfaces"
import { fetchSongsData } from "../utils"
import ChartsData from "../data/Charts.json"

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

        const songsList = response.tracks.map((song: ChartSongFromAPIs) => {
            const { title, images, subtitle, url, hub } = song

            const hubAction = hub.actions.find((action) => action.uri)?.uri

            return {
                name: title,
                imageUrl: images.coverart,
                artist: subtitle,
                url,
                hubAction,
            } as ChartSong
        })

        setSongs(songsList)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return songs
}
