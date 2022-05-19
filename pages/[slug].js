import Image from 'next/image'
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai'

export default function Movie({ data }) {
  console.log(data)
  return (
    <div className="min-h-screen max-w-sm mx-auto ">
      <BackBtn />
      <h1 className="text-3xl font-semibold px-8 mb-2">{data.Title}</h1>
      <YearRatedRuntime data={data} />
      <ImagePoster data={data} />
      <p className="pl-8 pr-2 mb-8">{data.Plot}</p>
      <div className="flex"></div>
    </div>
  )
}

const BackBtn = () => {
  return (
    <div className="py-4 px-8 mb-8">
      <Link href={'/'}>
        <a className="  px-8  text-xl font-medium  shadow-lg py-2 bg-gray-200  rounded  ">
          Back
        </a>
      </Link>
    </div>
  )
}
const YearRatedRuntime = ({ data }) => {
  return (
    <div className="flex text-gray-400 px-8 gap-2 mb-2">
      <div>{data.Year}</div>
      <div>.</div>
      <div>{data.Rated}</div>
      <div>.</div>
      <div>{data.Runtime}</div>
      <div className="flex gap-1 items-center">
        <AiFillStar className="text-yellow-400" />
        <span className="font-semibold text-gray-700">
          {data.Ratings[0].Value}
        </span>
      </div>
    </div>
  )
}
const ImagePoster = ({ data }) => {
  return (
    <div className="relative w-full h-[500px] max-w-sm xs:mx-8 mb-4">
      <Image
        src={data.Poster}
        alt="image not  available"
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const url = `http://www.omdbapi.com/?i=${params.slug}&apikey=f2fa9bd6`
  const response = await fetch(url)
  const data = await response.json()
  return { props: { data } }
}
