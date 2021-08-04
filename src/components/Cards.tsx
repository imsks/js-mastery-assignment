import { useEffect } from "react"
import { useState } from "react"
import { ChartSong } from "../interfaces"

export const SongCard = ({ name, imageUrl, artist, url, hubAction }: ChartSong) => {
    const [audio, setAudio] = useState(new Audio(hubAction))
    const [isPlaying, setIsPlaying] = useState(false)

    const playSong = () => {
        // If no song is playing
        if (!isPlaying) {
            audio.play()
            setIsPlaying(true)
            return
        }

        // If a song is playing
        setIsPlaying(false)
        audio.pause()
    }

    return (
        <div className="homepage__container__content__cards__item">
            <img
                className="homepage__container__content__cards__item__image"
                src={imageUrl}
                alt="artist"
            />
            <div className="homepage__container__content__cards__item__content">
                <div className="homepage__container__content__cards__item__content__container">
                    <h3 className="homepage__container__content__cards__item__content__container__name">
                        {name}
                    </h3>
                    <p className="homepage__container__content__cards__item__content__container__text">
                        {artist}
                    </p>
                </div>
                <div className="homepage__container__content__cards__item__content__play">
                    <div
                        onClick={playSong}
                        className="homepage__container__content__cards__item__content__play__link"
                    >
                        {isPlaying ? (
                            <h4 className="homepage__container__content__cards__item__content__play__link__text">
                                Stop
                            </h4>
                        ) : (
                            <h4 className="homepage__container__content__cards__item__content__play__link__text">
                                Play
                            </h4>
                        )}
                    </div>
                </div>
            </div>
            <a
                href={url}
                className="homepage__container__content__cards__item__content__link"
                target="_blank"
                rel="noreferrer"
            >
                <button className="homepage__container__content__cards__item__content__link__button">
                    More
                </button>
            </a>
        </div>
    )
}
