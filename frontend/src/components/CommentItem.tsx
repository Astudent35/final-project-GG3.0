import useFormatDate from "../hooks/useFormatDate"

interface CommentItemProps {
  comment: string
  username: string
  created: Date
}

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  username,
  created,
}) => {
  const formatedDate = useFormatDate(created)
  return (
    <li>
      <p>
        "{comment}" oleh <strong>{username}</strong>
      </p>
      <span className="font-bold">Dibuat pada {formatedDate} </span>
    </li>
  )
}

export default CommentItem
