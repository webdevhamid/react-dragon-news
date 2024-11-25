import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import dateFormat from "dateformat";
const Header = () => {
  const now = new Date();
  return (
    <div className="flex flex-col items-center justify-center gap-3 pt-5 pb-3 text-center">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="header-content">
        <p className="text-lg text-gray-500">Journalism Without Fear or Favour</p>
        <span className="text-lg text-gray-700">{dateFormat(now, "dddd, mmmm d, yyyy")}</span>
      </div>
    </div>
  );
};

export default Header;
