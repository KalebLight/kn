export function NavButton({ text }) {
  return (
    <button className="navButton">
      <p className="py-2 px-4 rounded-md text-sm text-white">{text}</p>
    </button>
  );
}

export default NavButton;
