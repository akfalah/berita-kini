import PropTypes from "prop-types";
import { Link } from "react-router";

import formatDate from "../utils/formatDate";

const PopulerCard = ({ item, index }) => {
  return (
    <Link to={`/post/${encodeURIComponent(item.title)}`}>
      <figure className="w-[400px] p-4 flex space-x-4">
        <div className="relative">
          <img
            src={item?.thumbnail}
            alt="populer-thumbnail"
            className="max-w-[147px] h-[128px] object-cover rounded-xl"
          />

          <div className="absolute -top-[18px] -left-[11px] w-[35px] h-[37px] flex justify-center items-center font-nunito-sans text-body-lg-bold text-white bg-dark-700 rounded-full">
            {index + 1}
          </div>
        </div>
        
        <figcaption className="flex flex-col space-y-4">
          <h3 className="h-[75px] font-nunito-sans text-body-md-bold line-clamp-3">
            {item?.title}
          </h3>

          <div className="flex items-center space-x-3">
            <p className="text-body-sm-semibold text-primary-500">
              {item?.category}
            </p>

            <div className="w-[4.76px] h-[4.76px] bg-[#D9D9D9] rounded-full" />
            
            <p className="text-body-sm-medium text-[#526071]">
              {formatDate(item?.pubDate)}
            </p>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};

PopulerCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};

export default PopulerCard;
