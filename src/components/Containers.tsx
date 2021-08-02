import { Method } from "axios"
import { useState } from "react"
import { SongCard } from "."
import { useSongs } from "../hooks"
import { ChartSong, SearchResponse } from "../interfaces"
import { fetchSongsData } from "../utils"

export const ChartsContainer = () => {
    const songs = useSongs() as Array<ChartSong>

    return (
        <div className="homepage__container__content">
            <div className="homepage__container__content__cards">
                {songs.length > 0
                    ? songs.map((song, index) => {
                          return (
                              <SongCard
                                  key={index}
                                  name={song.name}
                                  artist={song.artist}
                                  imageUrl={song.imageUrl}
                                  url={song.url}
                              />
                          )
                      })
                    : null}
            </div>
        </div>
    )
}

export const SearchContainer = () => {
    const [query, setQuery] = useState("")
    const [searchedSongs, setSearchedSongs] = useState([] as Array<ChartSong>)

    const handleSearchSong = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault()

        let method: Method = "GET"

        const options = {
            method: method,
            url: `${process.env.REACT_APP_RAPID_API_GENIUS_BASE_ENDPOINT}/search`,
            params: { q: query },
            headers: {
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
                "x-rapidapi-host": process.env.REACT_APP_RAPID_API_GENIUS_HOST,
            },
        }

        const response = (await fetchSongsData(options)) as SearchResponse

        const searchedSongs = response.response.hits.map((song) => {
            const { title, primary_artist, header_image_url, url } = song.result

            return {
                name: title,
                artist: primary_artist.name,
                imageUrl: header_image_url,
                url,
            } as ChartSong
        })

        setSearchedSongs(searchedSongs)
    }

    return (
        <div className="homepage__container__search">
            <form className="homepage__container__search__form">
                <input
                    type="text"
                    className="homepage__container__search__form__input"
                    placeholder="Type a song.."
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button
                    className="homepage__container__search__form__submit"
                    onClick={handleSearchSong}
                >
                    Search
                </button>
            </form>
            <div className="homepage__container__content__cards">
                {searchedSongs.length > 0
                    ? searchedSongs.map((song, index) => {
                          return (
                              <SongCard
                                  key={index}
                                  name={song.name}
                                  artist={song.artist}
                                  imageUrl={song.imageUrl}
                                  url={song.url}
                              />
                          )
                      })
                    : null}
            </div>
        </div>
    )
}
