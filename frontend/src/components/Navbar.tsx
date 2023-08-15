import { GoArrowLeft } from "react-icons/go"
import { BsSearch } from "react-icons/bs"
import Chip from "./Chip"
const Navbar = () => {
  return (
    <nav className="px-5 py-2 sticky top-0 z-50 bg-primary text-white w-full h-full">
      <div className="mt-2 flex justify-between">
        <div className="flex gap-4 items-center cursor-pointer">
          <GoArrowLeft size={25} />
          <p className="font-bold text-sm">Play</p>
        </div>
        <BsSearch size={18} className="cursor-pointer"/>
      </div>
      {/* Chip */}
      <div className="mt-7">
        <ul className="flex gap-1">
          <Chip isActive label="Live"></Chip>
          <Chip label="Explore"></Chip>
          <Chip label="Promo ULTAH!"></Chip>
          <Chip label="Official Store"></Chip>
          <Chip label="Tips & Rekomendasi"></Chip>
          <Chip label="Terbaru"></Chip>
          <Chip label="Upcoming"></Chip>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
