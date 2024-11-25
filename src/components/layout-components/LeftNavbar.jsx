import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/news/categories")
      .then((response) => setCategories(response.data.data.news_category))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="sticky top-4">
      {/* "category_id": "01",
        "category_name": "Breaking News" */}
      <h2 className="font-semibold text-xl mb-3">All Category ({categories.length})</h2>
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className={"btn flex justify-start bg-base-100 border-none shadow-none"}
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
