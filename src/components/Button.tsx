type ButtonProps = {
  name: string;
  click?: any;
};
function Button({ name, click }: ButtonProps) {
  return (
    <button
      className="p-1 rounded bg-cyan-800 text-white px-4 hover:bg-cyan-700 "
      onClick={() => click()}
    >
      {name}{" "}
    </button>
  );
}

export default Button;
