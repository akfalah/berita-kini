import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="py-3 flex items-center space-x-2 lg:space-x-4 animate-fade-in">
      <div className="w-1 h-7 lg:h-[34px] bg-primary-500 rounded-full" />

      <h2 className="font-nunito-sans text-lg lg:text-2xl font-bold">{title}</h2>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
