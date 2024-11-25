import { Outlet } from "react-router-dom";
import LeftNavbar from "./layout-components/LeftNavbar";
import RightNavbar from "./layout-components/RightNavbar";

const Main = () => {
  return (
    <main className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-5">
        <aside className="">
          {/* Left Navbar */}
          <LeftNavbar />
        </aside>
        <div className="col-span-2">
          {/* Main Content */}
          <Outlet />
        </div>
        <aside className="">
          {/* Right Navbar */}
          <RightNavbar />
        </aside>
      </div>
    </main>
  );
};

export default Main;
