import Navigation from "../Navigation/Navigation";

import barbques from '../../assets/crisps-types/barbque.jpg';
import lays from '../../assets/crisps-types/lays.jpg';
import potato from '../../assets/crisps-types/potato.jpg';
import taylors from '../../assets/crisps-types/taylors.png';
import walkers from '../../assets/crisps-types/walkers.jpg';
import tomato from '../../assets/crisps-types/tomato.jpg';

import "./Menu.css";

function Menu() {
    return (
        <div >
        <Navigation />
        <div className="menu-container">
      <div className="menu-header">
        <h4>Our Featured Crisps</h4>
      </div>
      <main className="menu-crisps-container">
        {/* <h2>Featured ÷</h2> */}
        <div className="crisp-card">
          <img
            src={barbques}
            alt="Crisp Flavor 1"
            className="crisp-image"
          />
          <h3>Crisp Flavor 1</h3>
          <p>Description of Crisp Flavor 1</p>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="crisp-card">
          <img
            src={lays}
            alt="Crisp Flavor 2"
            className="crisp-image"
          />
          <h3>Crisp Flavor 2</h3>
          <p>Description of Crisp Flavor 2</p>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="crisp-card">
          <img
            src={walkers}
            alt="Crisp Flavor 2"
            className="crisp-image"
          />
          <h3>Crisp Flavor 2</h3>
          <p>Description of Crisp Flavor 2</p>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="crisp-card">
          <img
            src={potato}
            alt="Crisp Flavor 2"
            className="crisp-image"
          />
          <h3>Crisp Flavor 2</h3>
          <p>Description of Crisp Flavor 2</p>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="crisp-card">
          <img
            src={taylors}
            alt="Crisp Flavor 2"
            className="crisp-image"
          />
          <h3>Crisp Flavor 2</h3>
          <p>Description of Crisp Flavor 2</p>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="crisp-card">
          <img
            src={tomato}
            alt="Crisp Flavor 2"
            className="crisp-image"
          />
          <h3>Crisp Flavor 2</h3>
          <p>Description of Crisp Flavor 2</p>
          <button className="buy-button">Buy Now</button>
        </div>
      </main>
      </div>
    </div>
    )
}

export default Menu