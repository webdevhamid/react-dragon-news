import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-[#F3F3F3] p-4 ">
      <span className="bg-[#D72050] text-base-100 px-3 py-2 text-xl font-medium">Latest</span>
      <Marquee pauseOnHover={true} className="space-x-10">
        <Link to="/category/:id" className="text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, distinctio?
        </Link>
        <Link to="/category/:id" className="text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, distinctio?
        </Link>
        <Link to="/category/:id" className="text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, distinctio?
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
