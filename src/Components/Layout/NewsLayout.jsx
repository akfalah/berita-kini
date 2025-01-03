import PropTypes from "prop-types";

import Header from "../Header";
import Loader from "../Loader";
import Card from "../Card";
import Pagination from "../Pagination";

const NewsLayout = ({
  category,
  isLoading,
  posts,
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  searchQuery,
  setSearchQuery,
}) => {
  const currentItems = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="w-full flex flex-col space-y-11 animate-fade-in">
      <div className="w-full flex flex-col md:flex-row md:justify-between lg:items-center gap-3">
        <Header title={category} />

        {setSearchQuery && (
          <div className="input-field-v1">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Cari disini..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6834_800)">
                  <path
                    d="M11.7419 10.7744C12.7102 9.45309 13.1439 7.81489 12.9562 6.18755C12.7685 4.56021 11.9733 3.06374 10.7297 1.99753C9.48604 0.931319 7.88567 0.374002 6.24876 0.437075C4.61184 0.500148 3.05911 1.17896 1.90119 2.33771C0.743273 3.49645 0.0655718 5.04967 0.00366997 6.68663C-0.0582319 8.32359 0.500231 9.92356 1.56733 11.1664C2.63443 12.4093 4.13147 13.2035 5.75894 13.39C7.38641 13.5765 9.0243 13.1416 10.3449 12.1724H10.3439C10.3739 12.2124 10.4059 12.2504 10.4419 12.2874L14.2919 16.1374C14.4794 16.325 14.7338 16.4305 14.9991 16.4306C15.2643 16.4307 15.5188 16.3254 15.7064 16.1379C15.8941 15.9504 15.9995 15.696 15.9996 15.4308C15.9997 15.1655 15.8944 14.911 15.7069 14.7234L11.8569 10.8734C11.8212 10.8372 11.7827 10.8048 11.7419 10.7744ZM11.9999 6.9304C11.9999 7.65267 11.8577 8.36787 11.5813 9.03516C11.3049 9.70245 10.8997 10.3088 10.389 10.8195C9.87829 11.3302 9.27197 11.7353 8.60468 12.0117C7.93739 12.2881 7.22219 12.4304 6.49992 12.4304C5.77765 12.4304 5.06245 12.2881 4.39516 12.0117C3.72787 11.7353 3.12156 11.3302 2.61083 10.8195C2.10011 10.3088 1.69498 9.70245 1.41858 9.03516C1.14218 8.36787 0.999921 7.65267 0.999921 6.9304C0.999921 5.47171 1.57938 4.07276 2.61083 3.04131C3.64228 2.00986 5.04123 1.4304 6.49992 1.4304C7.95861 1.4304 9.35756 2.00986 10.389 3.04131C11.4205 4.07276 11.9999 5.47171 11.9999 6.9304Z"
                    fill="#333333"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6834_800">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 0.43042)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center space-y-8 lg:space-y-16">
        {isLoading && <Loader />}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-8 lg:gap-16">
          {currentItems.map((item, index) => (
            <Card key={index} item={{ ...item, category: item.category }} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalItems / itemsPerPage)}
          totalItems={totalItems}
          onPageChange={onPageChange}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </section>
  );
};

NewsLayout.propTypes = {
  category: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
};

export default NewsLayout;
