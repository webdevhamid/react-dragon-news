import { BsBookmark, BsShare } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  const { author, title, details, image_url, rating, total_view } = news || {};

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const truncateText = (text, wordCount) => {
    const words = text.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="xl bg-white rounded-lg border">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 bg-base-300">
        <div className="flex items-center space-x-3">
          <img src={author.img} alt="Author" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h3 className="text-gray-800 font-medium text-sm">Awlad Hossain</h3>
            <p className="text-gray-500 text-sm">{formatDate(author.published_date)}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-gray-600">
            <BsBookmark size={16} />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <BsShare size={16} />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 pt-4 text-[22px] font-semibold text-gray-800 leading-tight">{title}</h2>

      {/* Image */}
      <div className="w-full h-[300px] relative my-4 px-5">
        <img src={image_url} alt="News Cover" className="w-full h-full object-cover rounded-xl" />
      </div>

      {/* Description */}
      <div className="px-4">
        <p className="text-gray-600 text-[15px] leading-relaxed mb-2">
          {truncateText(details, 45)}
        </p>
        <button className="text-[#FF8B47] text-sm font-medium hover:text-[#ff7a2d] mb-4">
          Read More
        </button>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex items-center justify-between border-t pt-3">
        {/* review */}
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <AiFillStar
              key={index}
              className={`${
                index < Math.floor(rating.number) ? "text-[#FF8B47]" : "text-gray-300"
              }`}
              size={16}
            />
          ))}
          <span className="text-gray-700 text-sm ml-1">{rating.number}</span>
        </div>
        {/* Total views */}
        <div className="flex items-center space-x-1 text-gray-600">
          <BsEye size={16} />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
