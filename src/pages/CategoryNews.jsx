import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Dragon News Home</h2>
      <p>{news.length} news found in this category</p>
      <div className="flex flex-col gap-5 mt-3">
        {news.map((singleNews) => (
          <NewsCard news={singleNews} key={singleNews._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
