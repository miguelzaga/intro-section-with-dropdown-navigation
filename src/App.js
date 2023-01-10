// client-audiophile.svg
// client-databiz.svg
// client-maker.svg
// client-meet.svg
// favicon-32x32.png
// icon-arrow-down.svg
// icon-arrow-up.svg
// icon-calendar.svg
// import iconCloseMenu from "./images/icon-close-menu.svg"
import iconMenu from "./images/icon-menu.svg"
// icon-planning.svg
// icon-reminders.svg
// icon-todo.svg
// image-hero-desktop.png
// image-hero-mobile.png
import logo from "./images/logo.svg"

import { useState } from "react";

function App() {
  return (
    <div>
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <button className="header__burguer">
          <img src={iconMenu} alt="open menu" />
        </button>

        {/*
        Menu Open
        <nav>
          <ul>
            <li>
              <button>
                Features
              </button>
            </li> <li>
              <button>
                Company
              </button>
            </li>
            <li>
              <a>
                Careers
              </a>
            </li>
            <li>
              <a>
                About
              </a>
            </li>
          </ul>
        </nav>

        <button>
          Login
        </button>
        <button>
          Register
        </button> 
          */}
      </header>
      <main>
        <h1>
          Make remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>
          Learn more
        </button>
      </main>
    </div>
  );
}

export default App;



