import { IoSearchOutline } from "react-icons/io5";
import Global from "../global-vars";

export default function NavbarSearch() {
  return (
    <div className="
    flex w-full
    ">
      <input className={`
      border-2 rounded-l-md border-gray-500
      h-[65%] w-full p-[15px]
      text-gray-500 font-light
      flex items-center
      bg-[rgba(0,0,0,0)]
      focus:border-${Global.accent}
      focus:outline-none
      focus:ring-0
      transition-all
      `} placeholder="Busque algo" />

      <button className={`
      w-[60px] flex justify-center items-center
      bg-gray-500 rounded-r-md
      transition-all
      hover:bg-${Global.accent}
      `}>
        <IoSearchOutline size={30} color="rgb(20,20,20)"/>
      </button>

    </div>
  );
}