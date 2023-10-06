import { LOGO_URL } from "./utils/constants";

const Hearder = () => {
  return (
    <div className="header">
      <div className="logo-containtor">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Hearder;
