import Global from "../global-vars";

interface Shortcut {
  text: string
}

export default function NavbarShortcut(props: Shortcut) {
  return (
    <button className={`
    text-gray-500 border-[2px] border-gray-500
    h-[75%] w-[120px] rounded-lg
    transition-all

    hover:bg-${Global.accent} hover:text-gray-50 hover:border-${Global.accent}
    `}>
      {props.text}
    </button>
  );
}