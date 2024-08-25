import PropTypes from "prop-types";


const BodyContent = (props) => {
  return <>{props.children}</>;
};



BodyContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BodyContent;
