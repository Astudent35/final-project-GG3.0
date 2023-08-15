import { useNavigate } from "react-router-dom"

interface CardProps {
  id: string
  image: string

}

const Card: React.FC<CardProps> = ({id, image}) => {
  const navigate = useNavigate()
  const handleClickCard = () => {
    navigate(`/detail/${id}`)
  }
  return (
    <div
      onClick={handleClickCard}
      className="relative mt-5 max-w-xs md:w-[20%] h-[350px] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
    >
      <img className="w-full h-full" src={image} alt="img-thumb" />
    </div>
  )
}

export default Card
