import NavbarLogo from "./logo";
import NavbarSearch from "./search";
import NavbarShortcut from "./shortcut";
import { IoChatboxOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="
    border-b-[1px] border-gray-500
    w-[100vw] h-[80px] pr-[30px] pl-[30px]
    flex items-center justify-center
    ">
      <div className="
      flex size-full items-center max-w-[1160px] gap-2
      ">
        <NavbarLogo/>
        <NavbarSearch/>

        <NavbarShortcut text="Suporte" />
        <NavbarShortcut text="Login" />

      </div>
    </div>
  );
}