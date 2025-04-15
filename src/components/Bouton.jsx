export function Button(props) {
  const { children, onClick, type = "button", className = "" } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-white text-black border-2  hover:bg-stone-200 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
