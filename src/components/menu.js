import iconCloseMenu from "../images/icon-close-menu.svg"

export default ({ setOpen }) => (
  <aside className="menu">
    <button onClick={() => setOpen(false)} className="menu__close">
      <img src={iconCloseMenu} alt="close menu" />
    </button>
    <nav className="menu__nav">
      <ul className="menu__list">
        <li className="menu__li">
          <button className="menu__accordion">
            Features
          </button>
        </li>
        <li className="menu__li">
          <button className="menu__accordion">
            Company
          </button>
        </li>
        <li className="menu__li">
          <a className="menu__a">
            Careers
          </a>
        </li>
        <li className="menu__li">
          <a className="menu__a">
            About
          </a>
        </li>
      </ul>
    </nav>

    <button className="menu__login">
      Login
    </button>
    <button className="menu__register">
      Register
    </button>
  </aside>
)
