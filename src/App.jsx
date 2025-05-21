// Ricerca movie + TV + people: https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${string}
// 
// Discover Movies:             https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}
// Discover TV:                 https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}
// 
// flag url:                    http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg

// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom"

// components
import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/Homepage"

// context
import { ShowsProvider } from "./context/ShowsContext"

function App() {
  return (
    <>

      <ShowsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Homepage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShowsProvider>

    </>
  )
}

export default App
