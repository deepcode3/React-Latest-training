//Conditional rendering:depaninf on true or false we can decide to render not render part of the component
import PropTypes from "prop-types";

function UserGreeting(props) {
  const msg = <h2 className="welcome">Welcome {props.userName}</h2>;
  const msg2 = <h2 className="again">Please login to continue</h2>;

  return props.isLoggedIn ? msg : msg2;
}
export default UserGreeting;
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: true,
  userName: "guest",
};
