interface Shortcut {
  text: string
}

export default function NavbarShortcut(props: Shortcut) {
  return (
    <button className="
    text-gray-500 border-[2px] border-gray-500
    h-[75%] w-[120px] rounded-lg
    transition-all

    hover:bg-gray-500 hover:text-gray-50
    ">
      {props.text}
    </button>
  );
}