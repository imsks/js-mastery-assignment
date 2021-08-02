import React from "react"
import { Navbar } from "./components"

const App = () => {
    return (
        <section className="homepage">
            <Navbar />
            <div className="homepage__container">
                <div className="homepage__container__search">
                    <form className="homepage__container__search__form">
                        <input
                            type="text"
                            className="homepage__container__search__form__input"
                            placeholder="Type a song.."
                        />
                        <button className="homepage__container__search__form__submit">
                            Search
                        </button>
                    </form>
                </div>

                <div className="homepage__container__content">
                    <div className="homepage__container__content__cards">
                        <div className="homepage__container__content__cards__item">
                            <img className="homepage__container__content__cards__item__image" />
                            <h3>Title</h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App
