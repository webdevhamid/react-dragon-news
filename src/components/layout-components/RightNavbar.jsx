import FindUs from "../FindUs";
import QZone from "../QZone";
import RightAdvertisement from "../RightAdvertisement";
import SocialLogins from "../SocialLogins";

const RightNavbar = () => {
  return (
    <div className="space-y-5">
      <SocialLogins />
      <FindUs />
      <QZone />
      <RightAdvertisement />
    </div>
  );
};

export default RightNavbar;
