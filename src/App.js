import rasm1 from './images/rasm1.jpg';
import rasm2 from './images/rasm2.jpg';
import rasm3 from './images/rasm3.jpg';
import rasm4 from './images/rasm4.jpg';
import rasm5 from './images/rasm5.jpg';
import rasm6 from './images/rasm6.jpg';
import rasm7 from './images/rasm7.jpg';
import rasm8 from './images/rasm8.jpg';
import rasm9 from './images/rasm9.jpg';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';
import './App.css';

function App() {
  return (
    <div>
      <div className="text">
      <h1>Олег Марков</h1>
      <span>
        <p><a href="#">Главная</a></p>
        <p><a href="#">Обо мне</a></p>
        <p><a href="#">Связаться</a></p>
      </span>
      </div>
      <div className="imagesBox">
        <div className="images">
          <img src={rasm1} alt="" />
          <img src={rasm4} alt="" />
          <img src={rasm7} alt="" />
        </div>
        <div className="images">
          <img src={rasm2} alt="" />
          <img src={rasm5} alt="" />
          <img src={rasm8} alt="" />
        </div>
        <div className="images">
          <img src={rasm3} alt="" />
          <img src={rasm6} alt="" />
          <img src={rasm9} alt="" />
        </div>
      </div>
      <p className="footer-text">© 2035 Олег Марков. Сайт создан на Wix.com.</p>
      <div className="footer-img">
        <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
        <a href="https://twitter.com/"><img src={twitter} alt="" /></a>
        <a href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
      </div>
      

    </div>
  );
}

export default App;
