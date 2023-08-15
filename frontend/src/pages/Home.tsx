import { Card, Navbar } from "../components";
import { BASE_URL_API } from "../config/api";
import useAxios from "../hooks/useAxios"
import { VideoData } from "../types"
import toast from 'react-hot-toast'
const HomePage = () => {
  const {
    data: dataVideo,
    loading,
    error,
  } = useAxios(`${BASE_URL_API}/video`)


  if(error){
    toast.error(error)
  }

  return (
    <>
      <Navbar></Navbar>
      {loading ? (
        <p className="text-white">Loading</p>
      ) : (
        <section className="text-white px-5">
          <div className="flex gap-3 flex-wrap h-full">
            {dataVideo?.map((item: VideoData) => {
              return (
                <Card
                  key={item.videoID}
                  id={item.videoID}
                  image={item.url_image_thumbnail}
                ></Card>
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}

export default HomePage
