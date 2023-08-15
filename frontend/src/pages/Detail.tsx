import { useParams } from "react-router-dom"
import { CommentData, ProductData } from "../types"
import useAxios from "../hooks/useAxios"
import { CardProduct, CommentItem, FormComment, Loader } from "../components"
import {  useEffect, useState } from "react"
import toast from "react-hot-toast"
import { BASE_URL_API } from "../config/api"

const DetailPage = () => {
  const { id } = useParams()
  const [search, setSearch] = useState("")
  const {
    data: dataProduct,
    error: errorProduct,
    loading: loadingProduct,
  } = useAxios(`${BASE_URL_API}/product/${id}`)
  const {
    data: dataComment,
    error: errorComment,
    loading: loadingComment,
    refetch
  } = useAxios(`${BASE_URL_API}/comment/${id}`)
  const { data: searchedData } = useAxios(
    `${BASE_URL_API}/product/${id}/search?title=${search}`
  )



  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const renderedProduct = !search ? dataProduct : searchedData


  useEffect(()=>{
    if (errorComment || errorProduct) {
      toast.error(errorComment || errorProduct)
    }
  },[errorComment,errorProduct])

  return (
    <div className="flex bg-white h-full">
      <div
        id="left-side"
        className="bg-purple-600 h-screen w-1/5 rounded-lg flex flex-col gap-5 pt-2 items-center overflow-y-auto"
      >
        {loadingProduct ? (
          <Loader />
        ) : (
          renderedProduct?.map((item: ProductData) => {
            return <CardProduct key={item.productID} title={item.title} />
          })
        )}
      </div>
      <main className="bg-blue-500 h-screen w-full rounded-lg">
        <div className="flex flex-col gap-3 justify-center items-center h-full">
          <div className="flex gap-2">
            <label htmlFor="input-search">Cari Product:</label>
            <input id="input-search" type="text" onChange={handleSearchInput} />
          </div>
          <iframe
            className="w-full h-[75%] px-4"
            src="https://www.youtube.com/embed/13PowoqJkEM"
          ></iframe>
        </div>
      </main>
      <div id="right-side" className="h-screen w-1/5">
        <div className="bg-orange-400 h-[70%] w-full rounded-lg overflow-y-auto">
          <ul className="list-disc px-5">
            {loadingComment ? (
              <Loader />
            ) : (
              dataComment?.map((item: CommentData, index) => {
                return (
                  <CommentItem
                    key={`comment-${index}`}
                    comment={item.comment}
                    created={item.timestamp.createdtAt}
                    username={item.username}
                  />
                )
              })
            )}
          </ul>
        </div>
        <div className="bg-yellow-400 h-[30%] w-full rounded-lg">
          <FormComment mutate={refetch}></FormComment>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
