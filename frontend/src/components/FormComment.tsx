import { useState, useCallback, SetStateAction, Dispatch } from "react"
import axios, { AxiosError } from "axios"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"
import { BASE_URL_API } from "../config/api"

interface FormCommentProps {
  mutate: Dispatch<SetStateAction<object>>
}

const FormComment: React.FC<FormCommentProps> = ({ mutate }) => {
  const { id } = useParams()
  const [username, setUsername] = useState("")
  const [comment, setComment] = useState("")

  const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const handleCommentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        const response = await axios.post(`${BASE_URL_API}/comment`, {
          username,
          bodyComment: comment,
          videoID: id,
        })
        if (response.data.success) {
          toast.success("Berhasil membuat comment")
          mutate({})
        } else {
          toast.error("Gagal membuat comment")
          mutate({})
        }
      } catch (e) {
        const error = e as AxiosError
        toast.error(error.message)
      }
    },
    [id, comment, username,mutate]
  )

  return (
    <form onSubmit={handleSubmit} className="bg-transparent p-2">
      <div>
        <label htmlFor="username-input">Username</label>
        <input
          id="username-input"
          type="text"
          onChange={handleUsernameInput}
          value={username}
          required
        />
      </div>
      <div>
        <label htmlFor="comment-input">Comment</label>
        <input
          id="comment-input"
          type="text"
          onChange={handleCommentInput}
          value={comment}
          required
        />
      </div>
      <button
        type="submit"
        className="px-2 text-black border border-black mt-2 w-full"
      >
        Submit
      </button>
    </form>
  )
}

export default FormComment
