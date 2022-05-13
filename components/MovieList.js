import TextareaAutosize from 'react-textarea-autosize'
import { MdOutlineFavorite } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import MovieContainer from './MovieContainer'
import Rating from '@mui/material/Rating'
import { useState } from 'react'
export default function MovieList({
  movies,
  handleFavouritesClick,
  favouriteComponent,
}) {
  return (
    <MovieContainer>
      {movies.map((movie, i) => (
        <div
          key={i}
          className="text-white w-[308px] rounded overflow-hidden h-auto  shadow-xl my-4 hover:-mt-2 transition-all z-index-50 hover:shadow-2xl"
        >
          <img
            src={movie.Poster}
            alt={movie.Poster && 'this Movies has no img'}
            className="relative object-cover  w-full h-[308px] bg-slate-400 "
          />
          <div className="my-4 px-4 flex gap-2 flex-col ">
            <div className=" text-black text-xl mb-2 ">{movie.Title}</div>
            <div className="flex w-full justify-between items-center">
              <div onClick={() => handleFavouritesClick(movie)}>
                {favouriteComponent}
              </div>
              <CustomRating />
            </div>
          </div>
          <Comment />
        </div>
      ))}
    </MovieContainer>
  )
}

export const IconContainer = ({ children, onClick }) => {
  return (
    <div
      className="h-8 w-8 flex justify-center items-center bg-slate-600 hover:bg-slate-800 rounded-full cursor-pointer "
      onClick={onClick}
    >
      {children}
    </div>
  )
}

const CustomRating = () => {
  const [ratingValue, setRatingValue] = useState(0)
  return (
    <>
      <Rating
        name="simple-controlled"
        value={ratingValue}
        onChange={(event, newValue) => {
          setRatingValue(newValue)
        }}
      />
    </>
  )
}

const Comment = () => {
  const [text, setText] = useState('')

  return (
    <div className="text-black px-4 mb-2 relative">
      <p className="text-lg   font-semibold">Comment</p>
      <TextareaAutosize
        minRows={4}
        className={`w-full  h-auto z-50 rounded  shadow mt-2 p-2 placeholder:italic outline-none   ${
          text.length > 0 && ' ring-2 ring-blue-500'
        }`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What do you think about his film ?"
      />
      {/* <div
        className={`font-medium  absolute  right-8 px-5 bg-green-400 rounded py-1  ${
          text.length > 0 ? 'opacity-100 cursor-pointer' : 'opacity-70'
        }`}
        // onClick={postFun}
      >
        Save
      </div> */}
    </div>
  )
}

export const FavouriteIcon = () => {
  return (
    <IconContainer>
      <MdOutlineFavorite className={`text-red-400 text-xl cursor-pointer`} />
    </IconContainer>
  )
}
export const DelFavouriteIcon = () => {
  return (
    <IconContainer>
      <AiFillDelete className={`text-gray-300 text-xl cursor-pointer`} />
    </IconContainer>
  )
}
