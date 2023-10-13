import PropTypes from 'prop-types';
import {
  CubeTransparentIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid';

const Header = (props) => {
  const title = props.title;

  return (
    <header className="bg-blue-500 p-4 mb-2 flex justify-between items-center">
      <div className="flex-grow">
        <CubeTransparentIcon className="h-6 w-6 text-white mr-2" />
      </div>
      <div className="flex-grow flex items-center">
        <h1 className="text-white text-center text-xl">{title}</h1>
      </div>
      <div>
        {/* Add navigation links here if needed */}
        <ExclamationCircleIcon className="h-6 w-6 text-white" />
        {/* Info icon */}
      </div>
    </header>
  );
};
Header.defaultProps = {
  title: 'Default Title',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
