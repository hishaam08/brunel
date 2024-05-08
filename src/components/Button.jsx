import { Link } from "react-router-dom";

function Button({
  children,
  height = 77,
  radius = 100,
  variant = "primary",
  to = "#",
  border = true,
}) {
  return (
    <Link
      className={`btn btn__${variant}`}
      to={to}
      style={{
        // height: `${height}px`,
        padding: "26px 49px",
        borderRadius: `${radius}px`,
        border: border ? "1.3px solid #EAEAEA" : "none",
        backgroundColor: variant === "primary" ? "white" : "black",
        color: variant === "primary" ? "black" : "white",
      }}
    >
      {children}
    </Link>
  );
}

export default Button;
