import { Link } from "@tanstack/react-router";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="font-bold text-3xl leading-6 italic">
        <span className="text-yellow-500">R</span>oot
      </h1>
      <p className="text-right text-xs font-semibold leading-1">Down</p>
    </Link>
  );
};

export default Logo;
