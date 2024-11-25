import classZone from "../assets/class.png";
import swimmingZone from "../assets/swimming.png";
import playZone from "../assets/playground.png";
import { Link } from "react-router-dom";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-semibold text-xl mb-4">Q-ZONE</h2>
      <div className="flex flex-col gap-3">
        <Link>
          <img src={swimmingZone} alt="" className="w-full" />
        </Link>
        <Link>
          <img src={classZone} alt="" className="w-full" />
        </Link>
        <Link>
          <img src={playZone} alt="" className="w-full" />
        </Link>
      </div>
    </div>
  );
};

export default QZone;
