export default function MovieContainer({ children }) {
  return (
    <div className="  flex overflow-x-scroll     ">
      <div>
        <div className="w-scr px-8  flex  gap-4  ">
          {children}
        </div>
      </div>
    </div>
  )
}
