import PropTypes from 'prop-types';
import './Title.css'

const Title = ({ subTitle, title, icon }) => {
  return (
      <div className="title">
          <div className="title-icon">
              {icon && <img src={icon} alt="Icon" />}
          </div>
          <div className="title-text">
              {subTitle && <p>{subTitle}</p>}
              <h2>{title}</h2>
          </div>
      </div>
  );
}
Title.propTypes = {
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

export default Title