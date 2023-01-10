import { useState } from "react";

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <button>
                Features
              </button>
            </li>
            <li>
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



