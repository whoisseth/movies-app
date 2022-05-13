import { IoMdSearch } from 'react-icons/io'
export const SearchBox = ({ className, value, setSearchValue }) => {
  return (
    <div
      className={
        '     flex gap-1 items-center text-white font-poppins  bg-white rounded overflow-hidden px-2  w-[80%] shadow  ' +
        className
      }
    >
      <IoMdSearch className="text-xl text-gray-400 cursor-pointer " />
      <input
        type="text"
        value={value}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search Movies   "
        className="flex  mb-2 w-full px-2  outline-none  placeholder:text-gray-400 placeholder:text-sm  text-black   my-2 text-sm 
      "
      />
    </div>
  )
}
