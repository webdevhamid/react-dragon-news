import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";
import Navbar from "../components/Navbar";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  // console.log(news);
  return (
    <div>
      <div className="container mx-auto">
        <Header />
        <Navbar />
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-9">
            <h2>Dragon News</h2>
            <div className="border p-5 flex flex-col gap-5">
              <div className="">
                <img src={news.image_url} alt="" />
              </div>
              <h2 className="font-semibold text-2xl">{news.title}</h2>
              <p className="text-gray-500">{news.details}</p>
              <Link
                to={`/category/${news.category_id}`}
                className="text-white bg-red-600 px-5 py-3 w-fit"
              >
                All news in this category
              </Link>
            </div>
          </div>
          <div className="col-span-3">
            <RightNavbar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetails;
