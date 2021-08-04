import { Method } from "axios"
import { useState } from "react"
import { SongCard } from "."
import { useSongs } from "../hooks"
import { ChartSong, SearchedSong, SearchResponse } from "../interfaces"
import { fetchSongsData } from "../utils"
import SearchData from "../data/Search.json"

export const ChartsContainer = () => {
    const songs = useSongs() as Array<ChartSong>

    return (
        <div className="homepage__container__content">
            <h1 className="homepage__container__content__heading">Daily Charts</h1>
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
                                  hubAction={song.hubAction}
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
            url: `${process.env.REACT_APP_RAPID_API_SHAZAM_BASE_ENDPOINT}/search`,
            params: {
                term: query,
                locale: "en-US",
                offset: "0",
                limit: "0",
            },
            headers: {
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
                "x-rapidapi-host": process.env.REACT_APP_RAPID_API_SHAZAM_HOST,
            },
        }

        // const response = (await fetchSongsData(options)) as SearchResponse

        const response = SearchData as SearchResponse

        const searchedSongs = response.tracks.hits.map((song: SearchedSong) => {
            const { title, images, subtitle, hub, url } = song.track

            const hubAction = hub.actions.find((action) => action.uri)?.uri

            return {
                name: title,
                imageUrl: images.coverart,
                artist: subtitle,
                url,
                hubAction,
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

            {searchedSongs && searchedSongs.length > 0 && (
                <>
                    <h1 className="homepage__container__content__heading">
                        Search Results
                    </h1>
                    <div className="homepage__container__content__cards">
                        {searchedSongs.map((song, index) => {
                            return (
                                <SongCard
                                    key={index}
                                    name={song.name}
                                    artist={song.artist}
                                    imageUrl={song.imageUrl}
                                    url={song.url}
                                    hubAction={song.hubAction}
                                />
                            )
                        })}
                    </div>
                </>
            )}
        </div>
    )
}
