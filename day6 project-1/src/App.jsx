import { useState } from 'react';
import './App.css';
import Data from './components/Data';

function App() {
  const [data, setData] = useState([]);

  const handleClick = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <header>
        <div className="logo">
          <h2>Fake Store</h2>
        </div>

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="FetchBtn">
          <button onClick={handleClick}>Fetch Data</button>
        </div>
      </header>

      <Data arr={data} />

      <footer>
        <div className="footer_section layout_padding">
          <div className="container">
            <div className="footer_logo">
              <h2>Fake Store</h2>
            </div>
            <div className="input_bt">
              <input type="text" className="mail_bt" placeholder="Your Email" name="Your Email" />
              <span className="subscribe_bt" id="basic-addon2"><a href="#">Subscribe</a></span>
            </div>
            <div className="footer_menu">
              <ul>
                <li><a href="#">Best Sellers</a></li>
                <li><a href="#">Gift Ideas</a></li>
                <li><a href="#">New Releases</a></li>
                <li><a href="#">Today's Deals</a></li>
                <li><a href="#">Customer Service</a></li>
              </ul>
            </div>
            <div className="location_main">Help Line Number: <a href="#">+1 1800 1200 1200</a></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
