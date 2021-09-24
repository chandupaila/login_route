import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="nav-image"
    />
    <div className="unOrder">
      <ul className="unOrder">
        <li>
          <Link className="list" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="list" to="/">
            Products
          </Link>
        </li>
        <li>
          <Link className="list" to="/">
            Cart
          </Link>
        </li>
      </ul>

      <button type="button" className="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
