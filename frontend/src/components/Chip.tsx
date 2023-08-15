interface ChipProps {
  label: string
  isActive?:boolean;
}

const Chip: React.FC<ChipProps> = ({ label,isActive }) => {
  return (
    <li className={`cursor-pointer border ${isActive && 'border-green-600 text-green-500'} font-medium px-4 py-2 rounded-2xl text-base`}>
      {label}
    </li>
  )
}

export default Chip
