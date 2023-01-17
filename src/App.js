import clientAudiophile from "./images/client-audiophile.svg"
import clientDatabiz from "./images/client-databiz.svg"
import clientMaker from "./images/client-maker.svg"
import clientMeet from "./images/client-meet.svg"
import iconMenu from "./images/icon-menu.svg"
import imageHeroDesktop from "./images/image-hero-desktop.png"
import imageHeroMobile from "./images/image-hero-mobile.png"
import logo from "./images/logo.svg"

import Menu from "./components/menu.js"

import { useState } from "react";

function App() {
  var clientImages = [
    clientDatabiz,
    clientAudiophile,
    clientMeet,
    clientMaker,
  ]

  var [open, setOpen] = useState(true);

  return (
    <div>
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <button onClick={() => setOpen(true)} className="header__burguer">
          <img src={iconMenu} alt="open menu" />
        </button>
      </header>
      {open ? (
        <Menu setOpen={setOpen} />
      ) : ""
      }
      <main className="main">
        <picture className="main__img">
          <source srcSet={imageHeroDesktop} media="(min-width: 1024px)" />
          <img src={imageHeroMobile} alt="person standing up holding a laptop" />
        </picture>
        <div className="main__container">
          <h1 className="main__title">
            Make remote work
          </h1>
          <p className="main__text">
            Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <button className="main__btn">
            Learn more
          </button>
          <ul className="main__clients">
            {
              clientImages.map((e, i) => (
                <li key={i}>
                  <img alt={`client logo number ${i}`} src={e} />
                </li>
              ))
            }
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;



