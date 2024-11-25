import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">Find Us On</h2>
      <div className="flex flex-col border">
        <Link className="flex items-center gap-4 border-b p-4 text-gray-600 font-medium">
          <FaFacebook /> Facebook
        </Link>
        <Link className="flex items-center gap-4 border-b p-4 text-gray-600 font-medium">
          <FaTwitter /> Twitter
        </Link>
        <Link className="flex items-center gap-4 p-4 text-gray-600 font-medium">
          <FaInstagram /> Instagram
        </Link>
      </div>
    </div>
  );
};

export default FindUs;
