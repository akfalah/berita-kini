import { useState, useEffect } from "react";
import { Link } from "react-router";
import { fetchNews } from "../utils/fetchNews";
import formatDate from "../utils/formatDate";

import Loader from "./Loader";

const Headline = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);

      try {
        const categories = [
          "Nasional",
          "Internasional",
          "Ekonomi",
          "Olahraga",
          "Teknologi",
        ];

        const allPosts = [];

        for (const category of categories) {
          const data = await fetchNews(category);

          if (data.posts.length > 0) {
            allPosts.push({ ...data.posts[0], category: data.category });
          }
        }

        setPosts(allPosts);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, []);

  const handlePageChange = (page) => {
    const totalPages = Math.ceil(posts.length / itemsPerPage);

    if (page < 1) {
      setCurrentPage(totalPages);
    } else if (page > totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(page);
    }
  };

  const currentItem = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )[0];

  return (
    <section className="w-full h-[492.43px] flex flex-col justify-center items-center space-y-11">
      {isLoading && <Loader />}

      {currentItem && (
        <>
          <figure className="w-full flex justify-between">
            <figcaption className="w-[505px] flex flex-col space-y-4">
              <span className="text-body-md-semibold text-[#526071]">
                Headline
              </span>

              <h1 className="font-nunito-sans text-4xl font-bold text-[#333333] leading-[46px]">
                {currentItem.title}
              </h1>

              <p className="text-body-md text-[#4F4F4F]">
                {currentItem.description}
              </p>

              <div className="flex items-center space-x-2 text-[#526071]">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5001_28878)">
                    <path
                      d="M9.625 6.04248C9.625 5.92645 9.67109 5.81517 9.75314 5.73312C9.83519 5.65107 9.94647 5.60498 10.0625 5.60498H10.9375C11.0535 5.60498 11.1648 5.65107 11.2469 5.73312C11.3289 5.81517 11.375 5.92645 11.375 6.04248V6.91748C11.375 7.03351 11.3289 7.14479 11.2469 7.22684C11.1648 7.30889 11.0535 7.35498 10.9375 7.35498H10.0625C9.94647 7.35498 9.83519 7.30889 9.75314 7.22684C9.67109 7.14479 9.625 7.03351 9.625 6.91748V6.04248Z"
                      fill="#828282"
                    />
                    <path
                      d="M3.0625 0.35498C3.17853 0.35498 3.28981 0.401074 3.37186 0.483121C3.45391 0.565168 3.5 0.676448 3.5 0.79248V1.22998H10.5V0.79248C10.5 0.676448 10.5461 0.565168 10.6281 0.483121C10.7102 0.401074 10.8215 0.35498 10.9375 0.35498C11.0535 0.35498 11.1648 0.401074 11.2469 0.483121C11.3289 0.565168 11.375 0.676448 11.375 0.79248V1.22998H12.25C12.7141 1.22998 13.1592 1.41435 13.4874 1.74254C13.8156 2.07073 14 2.51585 14 2.97998V12.605C14 13.0691 13.8156 13.5142 13.4874 13.8424C13.1592 14.1706 12.7141 14.355 12.25 14.355H1.75C1.28587 14.355 0.840752 14.1706 0.512563 13.8424C0.184374 13.5142 0 13.0691 0 12.605V2.97998C0 2.51585 0.184374 2.07073 0.512563 1.74254C0.840752 1.41435 1.28587 1.22998 1.75 1.22998H2.625V0.79248C2.625 0.676448 2.67109 0.565168 2.75314 0.483121C2.83519 0.401074 2.94647 0.35498 3.0625 0.35498ZM0.875 3.85498V12.605C0.875 12.837 0.967187 13.0596 1.13128 13.2237C1.29538 13.3878 1.51794 13.48 1.75 13.48H12.25C12.4821 13.48 12.7046 13.3878 12.8687 13.2237C13.0328 13.0596 13.125 12.837 13.125 12.605V3.85498H0.875Z"
                      fill="#828282"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5001_28878">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0 0.35498)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <span className="text-body-sm-medium">
                  {formatDate(currentItem.pubDate)}
                </span>
              </div>

              <Link to={`/berita-kini/post/${encodeURIComponent(currentItem.title)}`}>
                <button className="flex items-center space-x-2 transition-all ease-out duration-300">
                  <span className="text-body-md-medium text-primary-500 hover:font-bold">
                    Baca Selengkapnya
                  </span>

                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.0001 2.85498C14.0001 2.72237 13.9475 2.5952 13.8537 2.50143C13.7599 2.40766 13.6328 2.35498 13.5001 2.35498H7.50014C7.36753 2.35498 7.24036 2.40766 7.14659 2.50143C7.05282 2.5952 7.00014 2.72237 7.00014 2.85498C7.00014 2.98759 7.05282 3.11477 7.14659 3.20853C7.24036 3.3023 7.36753 3.35498 7.50014 3.35498H12.2931L2.14614 13.501C2.09966 13.5475 2.06278 13.6027 2.03762 13.6634C2.01246 13.7241 1.99951 13.7892 1.99951 13.855C1.99951 13.9207 2.01246 13.9858 2.03762 14.0466C2.06278 14.1073 2.09966 14.1625 2.14614 14.209C2.19263 14.2555 2.24782 14.2923 2.30856 14.3175C2.3693 14.3427 2.4344 14.3556 2.50014 14.3556C2.56589 14.3556 2.63099 14.3427 2.69173 14.3175C2.75247 14.2923 2.80766 14.2555 2.85414 14.209L13.0001 4.06198V8.85498C13.0001 8.98759 13.0528 9.11477 13.1466 9.20853C13.2404 9.3023 13.3675 9.35498 13.5001 9.35498C13.6328 9.35498 13.7599 9.3023 13.8537 9.20853C13.9475 9.11477 14.0001 8.98759 14.0001 8.85498V2.85498Z"
                      fill="#0090FF"
                    />
                  </svg>
                </button>
              </Link>
            </figcaption>

            <img
              src={currentItem.thumbnail}
              alt="headline-thumbnail"
              className="w-[637px] h-[417px] object-cover rounded-[20px]"
            />
          </figure>

          <div className="flex justify-center items-center space-x-4">
            <button onClick={() => handlePageChange(currentPage - 1)}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2084 2.36125C12.255 2.4077 12.2919 2.46287 12.3171 2.52362C12.3423 2.58436 12.3553 2.64948 12.3553 2.71525C12.3553 2.78102 12.3423 2.84614 12.3171 2.90688C12.2919 2.96763 12.255 3.0228 12.2084 3.06925L6.56141 8.71525L12.2084 14.3612C12.3023 14.4551 12.355 14.5825 12.355 14.7152C12.355 14.848 12.3023 14.9754 12.2084 15.0692C12.1145 15.1631 11.9872 15.2159 11.8544 15.2159C11.7216 15.2159 11.5943 15.1631 11.5004 15.0692L5.50041 9.06925C5.45385 9.0228 5.4169 8.96763 5.3917 8.90688C5.36649 8.84614 5.35352 8.78102 5.35352 8.71525C5.35352 8.64948 5.36649 8.58436 5.3917 8.52362C5.4169 8.46287 5.45385 8.40769 5.50041 8.36125L11.5004 2.36125C11.5469 2.31469 11.602 2.27774 11.6628 2.25254C11.7235 2.22733 11.7886 2.21436 11.8544 2.21436C11.9202 2.21436 11.9853 2.22733 12.046 2.25254C12.1068 2.27774 12.162 2.31469 12.2084 2.36125Z"
                  fill="#828282"
                />
              </svg>
            </button>

            <span className="w-[31.43px] h-[31.43px] flex justify-center items-center">
              {currentPage}
            </span>

            <span className="w-[31.43px] h-[31.43px] flex justify-center items-center">
              dari
            </span>

            <span className="w-[31.43px] h-[31.43px] flex justify-center items-center">
              {Math.ceil(posts.length / itemsPerPage)}
            </span>

            <button onClick={() => handlePageChange(currentPage + 1)}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.79191 2.36125C4.83836 2.31469 4.89353 2.27774 4.95428 2.25254C5.01502 2.22733 5.08015 2.21436 5.14591 2.21436C5.21168 2.21436 5.2768 2.22733 5.33755 2.25254C5.39829 2.27774 5.45347 2.31469 5.49991 2.36125L11.4999 8.36125C11.5465 8.40769 11.5834 8.46287 11.6086 8.52362C11.6338 8.58436 11.6468 8.64948 11.6468 8.71525C11.6468 8.78102 11.6338 8.84614 11.6086 8.90688C11.5834 8.96763 11.5465 9.0228 11.4999 9.06925L5.49991 15.0692C5.40603 15.1631 5.27869 15.2159 5.14591 15.2159C5.01314 15.2159 4.8858 15.1631 4.79191 15.0692C4.69803 14.9754 4.64528 14.848 4.64528 14.7152C4.64528 14.5825 4.69803 14.4551 4.79191 14.3612L10.4389 8.71525L4.79191 3.06925C4.74535 3.0228 4.70841 2.96763 4.6832 2.90688C4.65799 2.84614 4.64502 2.78102 4.64502 2.71525C4.64502 2.64948 4.65799 2.58436 4.6832 2.52362C4.70841 2.46287 4.74535 2.4077 4.79191 2.36125Z"
                  fill="#828282"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Headline;
