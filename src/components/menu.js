import iconCloseMenu from "../images/icon-close-menu.svg"
import iconCalendar from "../images/icon-calendar.svg"
import iconPlanning from "../images/icon-planning.svg"
import iconReminders from "../images/icon-reminders.svg"
import iconTodo from "../images/icon-todo.svg"

export default ({ setOpen }) => (
  <aside className="menu">
    <div className="menu__container">
      <button onClick={() => setOpen(false)} className="menu__close">
        <img src={iconCloseMenu} alt="close menu" />
      </button>
      <nav className="menu__nav">
        <ul className="menu__list">
          <li className="menu__li">
            <details className="menu__accordion">
              <summary>
                Features
              </summary>
              <ul className="menu__accordion-ul">
                <li><a href="#"><img className="menu__accordion-img" src={iconTodo} />Todo list</a></li>
                <li><a href="#"><img className="menu__accordion-img" src={iconCalendar} />Calendar</a></li>
                <li><a href="#"><img className="menu__accordion-img" src={iconReminders} />Reminders</a></li>
                <li><a href="#"><img className="menu__accordion-img" src={iconPlanning} />Planning</a></li>
              </ul>
            </details>
          </li>
          <li className="menu__li">
            <details className="menu__accordion">
              <summary>
                Company
              </summary>
              <ul>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </details>
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

      <div className="menu__buttons">
        <button className="menu__login">
          Login
        </button>
        <button className="menu__register">
          Register
        </button>
      </div>
    </div>
  </aside>
)
