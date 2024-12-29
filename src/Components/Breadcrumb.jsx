import PropTypes from "prop-types";
import { Link } from "react-router";
import routes from "../Routes/Routes";

const Breadcrumb = ({ category }) => {
  const categoryRoute = routes.find((route) => route.name === category);

  if (!categoryRoute) {
    console.error(`Category route not found for category: ${category}`);
    return null;
  }

  return (
    <section className="w-full flex items-center space-x-3 text-body-lg text-[#333333]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.70714 1.50006C8.51962 1.31259 8.26531 1.20728 8.00014 1.20728C7.73498 1.20728 7.48067 1.31259 7.29314 1.50006L0.646143 8.14606C0.599655 8.19255 0.562779 8.24774 0.53762 8.30848C0.512461 8.36922 0.499512 8.43432 0.499512 8.50006C0.499512 8.56581 0.512461 8.63091 0.53762 8.69165C0.562779 8.75239 0.599655 8.80757 0.646143 8.85406C0.74003 8.94795 0.867368 9.00069 1.00014 9.00069C1.06589 9.00069 1.13099 8.98774 1.19173 8.96259C1.25247 8.93743 1.30766 8.90055 1.35414 8.85406L2.00014 8.20706V13.5001C2.00014 13.8979 2.15818 14.2794 2.43948 14.5607C2.72079 14.842 3.10232 15.0001 3.50014 15.0001H12.5001C12.898 15.0001 13.2795 14.842 13.5608 14.5607C13.8421 14.2794 14.0001 13.8979 14.0001 13.5001V8.20706L14.6461 8.85406C14.74 8.94795 14.8674 9.00069 15.0001 9.00069C15.1329 9.00069 15.2603 8.94795 15.3541 8.85406C15.448 8.76018 15.5008 8.63284 15.5008 8.50006C15.5008 8.36729 15.448 8.23995 15.3541 8.14606L13.0001 5.79306V2.50006C13.0001 2.36745 12.9475 2.24028 12.8537 2.14651C12.7599 2.05274 12.6328 2.00006 12.5001 2.00006H11.5001C11.3675 2.00006 11.2404 2.05274 11.1466 2.14651C11.0528 2.24028 11.0001 2.36745 11.0001 2.50006V3.79306L8.70714 1.50006ZM13.0001 7.20706V13.5001C13.0001 13.6327 12.9475 13.7598 12.8537 13.8536C12.7599 13.9474 12.6328 14.0001 12.5001 14.0001H3.50014C3.36754 14.0001 3.24036 13.9474 3.14659 13.8536C3.05282 13.7598 3.00014 13.6327 3.00014 13.5001V7.20706L8.00014 2.20706L13.0001 7.20706Z"
          fill="#333333"
        />
      </svg>

      <Link to={"/"}>Beranda</Link>

      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.06506 1.4403C4.1057 1.39956 4.15397 1.36723 4.20713 1.34518C4.26028 1.32312 4.31726 1.31177 4.37481 1.31177C4.43235 1.31177 4.48933 1.32312 4.54248 1.34518C4.59564 1.36723 4.64392 1.39956 4.68456 1.4403L9.93456 6.6903C9.9753 6.73094 10.0076 6.77922 10.0297 6.83237C10.0517 6.88552 10.0631 6.9425 10.0631 7.00005C10.0631 7.0576 10.0517 7.11458 10.0297 7.16773C10.0076 7.22088 9.9753 7.26916 9.93456 7.3098L4.68456 12.5598C4.6024 12.642 4.49098 12.6881 4.37481 12.6881C4.25863 12.6881 4.14721 12.642 4.06506 12.5598C3.9829 12.4776 3.93675 12.3662 3.93675 12.25C3.93675 12.1339 3.9829 12.0225 4.06506 11.9403L9.00618 7.00005L4.06506 2.0598C4.02431 2.01916 3.99199 1.97088 3.96993 1.91773C3.94788 1.86458 3.93652 1.8076 3.93652 1.75005C3.93652 1.6925 3.94788 1.63552 3.96993 1.58237C3.99199 1.52922 4.02431 1.48094 4.06506 1.4403Z"
          fill="#333333"
        />
      </svg>

      <Link to={categoryRoute.path}>{category}</Link>

      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.06506 1.4403C4.1057 1.39956 4.15397 1.36723 4.20713 1.34518C4.26028 1.32312 4.31726 1.31177 4.37481 1.31177C4.43235 1.31177 4.48933 1.32312 4.54248 1.34518C4.59564 1.36723 4.64392 1.39956 4.68456 1.4403L9.93456 6.6903C9.9753 6.73094 10.0076 6.77922 10.0297 6.83237C10.0517 6.88552 10.0631 6.9425 10.0631 7.00005C10.0631 7.0576 10.0517 7.11458 10.0297 7.16773C10.0076 7.22088 9.9753 7.26916 9.93456 7.3098L4.68456 12.5598C4.6024 12.642 4.49098 12.6881 4.37481 12.6881C4.25863 12.6881 4.14721 12.642 4.06506 12.5598C3.9829 12.4776 3.93675 12.3662 3.93675 12.25C3.93675 12.1339 3.9829 12.0225 4.06506 11.9403L9.00618 7.00005L4.06506 2.0598C4.02431 2.01916 3.99199 1.97088 3.96993 1.91773C3.94788 1.86458 3.93652 1.8076 3.93652 1.75005C3.93652 1.6925 3.94788 1.63552 3.96993 1.58237C3.99199 1.52922 4.02431 1.48094 4.06506 1.4403Z"
          fill="#333333"
        />
      </svg>

      <span>Detail</span>
    </section>
  );
};

Breadcrumb.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Breadcrumb;
