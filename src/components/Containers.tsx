import { SongCard } from "."
import { useSongs } from "../hooks"
import { ChartSong } from "../interfaces"

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
