import React from "react"
import { ChartsContainer, Navbar, SearchContainer } from "./components"

const App = () => {
    return (
        <section className="homepage">
            <Navbar />
            <div className="homepage__container">
                <SearchContainer />

                <ChartsContainer />
            </div>
        </section>
    )
}

export default App
