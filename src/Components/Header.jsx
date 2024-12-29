import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="py-3 flex items-center space-x-4">
      <div className="w-1 h-[34px] bg-primary-500 rounded-full" />

      <h2 className="font-nunito-sans text-2xl font-bold">{title}</h2>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
