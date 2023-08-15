interface CardProductProps{
    title:string
}

const CardProduct:React.FC<CardProductProps> = ({
    title
}) => {
  return (
    <div className="h-[25%] w-[70%] bg-rose-600 rounded-lg flex justify-center items-center text-white">
      {title}
    </div>
  )
}

export default CardProduct
