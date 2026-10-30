import { Link } from "react-router-dom";

export default function Logo({ className = "" }) {
  return (
    <Link
      to="/"
      className={`logo ${className}`.trim()}
      aria-label="Puhas Kodu Tallinn home"
      title="Puhas Kodu Tallinn"
    >
      <img
        className="logo-img"
        src="/images/puhaskodu-logo-2048x512.webp"
        alt="Puhas Kodu Tallinn"
        width="280"
        height="70"
        draggable="false"
      />
    </Link>
  );
}
