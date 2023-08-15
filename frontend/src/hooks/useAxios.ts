import axios, { AxiosError } from "axios"
import { useCallback, useEffect, useState } from "react"

const useAxios = (url: string) => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);
  const [shouldRefetch, refetch] = useState({}); 

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get(url)
      setData(response.data)
      setLoading(false)
    } catch (e) {
      const err = e as AxiosError
      setLoading(false)
      setError(err.message)
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData,shouldRefetch])

  return {
    data,
    loading,
    error,
    refetch
  }
}
export default useAxios
