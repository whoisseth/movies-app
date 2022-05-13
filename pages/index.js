import { useEffect, useState } from 'react'
import MovieList from '../components/MovieList'
import { SearchBox } from '../components/SerchBox'
import { DelFavouriteIcon } from '../components/MovieList'
import { FavouriteIcon } from './../components/MovieList'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('batman')
  const [favorites, setFavorites] = useState([])
  const getMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f2fa9bd6`
    const response = await fetch(url)
    const data = await response.json()
    if (data.Search) {
      setMovies(data.Search)
    }
  }

  useEffect(() => {
    getMovies(searchValue)
  }, [searchValue])

  //
  const addFavouriteMovie = (movie) => {
    const newFavouriteMovie = [...favorites, movie]
    setFavorites(newFavouriteMovie)
  }
  const removeFavouriteMovie = (movie) => {
    const newFavouriteMovie = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    )
    setFavorites(newFavouriteMovie)
  }
  return (
    <>
      <SearchBox
        value={searchValue}
        setSearchValue={setSearchValue}
        className="mx-auto mt-8 mb-2"
      />
      <H1>Movies</H1>
      <MovieList
        movies={movies}
        handleFavouritesClick={addFavouriteMovie}
        favouriteComponent={<FavouriteIcon />}
      />

      <H1>Favourite</H1>
      {favorites.length > 0 && (
        <MovieList
          movies={favorites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={<DelFavouriteIcon />}
        />
      )}
    </>
  )
}

export default Home

const H1 = ({ children }) => {
  return <div className="text-2xl font-semibold px-8 my-2">{children}</div>
}
