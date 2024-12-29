import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, totalItems, onPageChange, itemsPerPage }) => {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage < 3 || currentPage >= totalPages - 2) {
        pages.push(1, 2, "...", totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
      <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-4">
        <span className="order-2 md:order-1 text-body-md text-[#333333]">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
        </span>

        <div className="order-1 md:order-2 flex items-center space-x-5">
          <button
            className={`flex items-center space-x-[6px] ${
              currentPage === 1 && "cursor-not-allowed"
            }`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9999 8.43044C11.9999 8.56305 11.9472 8.69023 11.8535 8.784C11.7597 8.87776 11.6325 8.93044 11.4999 8.93044H5.70692L7.85392 11.0764C7.90041 11.1229 7.93728 11.1781 7.96244 11.2389C7.9876 11.2996 8.00055 11.3647 8.00055 11.4304C8.00055 11.4962 7.9876 11.5613 7.96244 11.622C7.93728 11.6828 7.90041 11.738 7.85392 11.7844C7.80743 11.8309 7.75224 11.8678 7.6915 11.893C7.63076 11.9181 7.56566 11.9311 7.49992 11.9311C7.43417 11.9311 7.36907 11.9181 7.30833 11.893C7.24759 11.8678 7.19241 11.8309 7.14592 11.7844L4.14592 8.78444C4.09935 8.738 4.06241 8.68282 4.0372 8.62207C4.012 8.56133 3.99902 8.49621 3.99902 8.43044C3.99902 8.36467 4.012 8.29955 4.0372 8.23881C4.06241 8.17806 4.09935 8.12289 4.14592 8.07644L7.14592 5.07644C7.2398 4.98255 7.36714 4.92981 7.49992 4.92981C7.63269 4.92981 7.76003 4.98255 7.85392 5.07644C7.9478 5.17033 8.00055 5.29767 8.00055 5.43044C8.00055 5.56322 7.9478 5.69055 7.85392 5.78444L5.70692 7.93044H11.4999C11.6325 7.93044 11.7597 7.98312 11.8535 8.07689C11.9472 8.17066 11.9999 8.29783 11.9999 8.43044Z"
                fill="#828282"
              />
            </svg>

            <span className="hidden lg:inline text-body-md text-[#526071] hover:font-bold transition-all ease-out duration-300">
              Previous
            </span>
          </button>

          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={`w-8 h-8 text-body-md-medium ${
                page === currentPage
                  ? "bg-primary-500 text-white"
                  : `bg-transparent text-[#526071] ${
                      typeof page === "number" &&
                      "hover:bg-primary-500 hover:text-white"
                    }`
              } rounded-lg transition-all duration-300 ease-out`}
              onClick={() => typeof page === "number" && onPageChange(page)}
              disabled={typeof page !== "number"}
            >
              {page}
            </button>
          ))}

          <button
            className={`flex items-center space-x-[6px] ${
              currentPage === totalPages && "cursor-not-allowed"
            }`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span className="hidden lg:inline text-body-md text-[#526071] hover:font-bold transition-all ease-out duration-300">
              Next
            </span>

            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 8.43044C4 8.29783 4.05268 8.17066 4.14645 8.07689C4.24021 7.98312 4.36739 7.93044 4.5 7.93044H10.293L8.146 5.78444C8.05211 5.69055 7.99937 5.56322 7.99937 5.43044C7.99937 5.29767 8.05211 5.17033 8.146 5.07644C8.23989 4.98255 8.36722 4.92981 8.5 4.92981C8.63278 4.92981 8.76011 4.98255 8.854 5.07644L11.854 8.07644C11.9006 8.12289 11.9375 8.17806 11.9627 8.23881C11.9879 8.29955 12.0009 8.36467 12.0009 8.43044C12.0009 8.49621 11.9879 8.56133 11.9627 8.62207C11.9375 8.68282 11.9006 8.738 11.854 8.78444L8.854 11.7844C8.76011 11.8783 8.63278 11.9311 8.5 11.9311C8.36722 11.9311 8.23989 11.8783 8.146 11.7844C8.05211 11.6906 7.99937 11.5632 7.99937 11.4304C7.99937 11.2977 8.05211 11.1703 8.146 11.0764L10.293 8.93044H4.5C4.36739 8.93044 4.24021 8.87776 4.14645 8.784C4.05268 8.69023 4 8.56305 4 8.43044Z"
                fill="#828282"
              />
            </svg>
          </button>
        </div>
      </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
