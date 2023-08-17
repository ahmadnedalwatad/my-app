import { Link } from "react-router-dom";
import Header from "./Header";

export default function Nav() {
  return (
    <div className="box1">
      <Header />
      <ul>
        <li>
          <Link to="/" className="nav-item">
            HomePage
          </Link>
        </li>
        <li>
          <Link to="/booking" className="nav-item">
            BookingPage
          </Link>
        </li>
      </ul>
    </div>
  );
}
