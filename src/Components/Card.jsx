import PropTypes from "prop-types";
import { Link } from "react-router";

import formatDate from "../utils/formatDate";

const Card = ({ item }) => {
  return (
    <Link to={`/berita-kini/post/${encodeURIComponent(item.title)}`}>
      <figure className="w-[276px] flex flex-col space-y-4">
        <img
          src={item.thumbnail}
          alt="rekomendasi-thumbnail"
          className="max-w-[276px] max-h-[198px] object-cover rounded-xl"
        />

        <figcaption className="w-full flex flex-col space-y-3">
          <h3 className="h-[78px] text-body-lg-semibold line-clamp-3">
            {item.title}
          </h3>

          <div className="flex items-center space-x-3">
            <p className="text-body-sm-semibold text-primary-500">
              {item.category}
            </p>

            <div className="w-[4.76px] h-[4.76px] bg-[#D9D9D9] rounded-full" />
            
            <p className="text-body-sm-medium text-[#526071]">
              {formatDate(item.pubDate)}
            </p>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};

Card.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Card;
