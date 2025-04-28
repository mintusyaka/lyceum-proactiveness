import './InfoCard.css';
// import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; // Іконки соцмереж

function InfoCard() {
  return (
    <div className="info-card pangolin-regular">
      <div className="info-card-header">
        <div className="info-card-title">
          <h3>ЛІЦЕЙ</h3>
          <h2>"ПРОАКТИВНІСТЬ"</h2>
          <br></br>
        </div>
        <div className="info-card-icons">
          {/* <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a> */}
        </div>
      </div>
      
      <h2 className="info-card-subtitle">
        Справжня українська школа,<br />тільки дистанційна
      </h2>
      
      <p className="info-card-description">
        Дистанційна форма середньої освіти<br />
        Держстандарт України Ліцензія АА №123456
      </p>

      <p className="info-card-contact">
        Phone / Telegram / Viber <span className="info-card-phone">+38 093 826 56 03</span>
      </p>

      {/* <div className="info-card-buttons">
        <button className="info-button green">Стати учнем</button>
        <button className="info-button red">Стати вільним слухачем</button>
        <button className="info-button blue">Отримати консультацію</button>
      </div> */}
    </div>
  );
}

export default InfoCard;
