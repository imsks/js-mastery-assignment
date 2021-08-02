import React from "react"
import { ChartsContainer, Navbar } from "./components"

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

                <ChartsContainer />
            </div>
        </section>
    )
}

export default App
