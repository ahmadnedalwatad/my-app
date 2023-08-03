import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="box2">
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
        <li>
          <a href="https://www.w3schools.com">link 3</a>
        </li>
        <li>
          <a href="https://www.w3schools.com">link 4</a>
        </li>
      </ul>
    </div>
  );
}
