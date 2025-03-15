interface Props {
  text: string;
  py: number;
  px: number;
  bgColor?: string;
  border?: string;
  color?: string;
}

const Button = ({ text, py, px, bgColor, border, color }: Props) => {
  return (
    <>
      <button
        className={`btn rounded-4 px-${px} py-${py}`}
        style={{
          backgroundColor: bgColor || "#006894", // Default color
          color: color || "#fff", // Ensuring text is visible
          borderRadius: "5px",
          border: border || "none",
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
