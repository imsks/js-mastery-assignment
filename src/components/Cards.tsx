import { ChartSong } from "../interfaces"

export const SongCard = ({ name, imageUrl, artist, url }: ChartSong) => {
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
        </div>
    )
}
