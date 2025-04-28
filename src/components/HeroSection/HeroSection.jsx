import './HeroSection.css';
import InfoCard from '../InfoCard/InfoCard';

function HeroSection() {
  return (
    <section className="hero">
        <div className="hero-content">
            <InfoCard />
            <div className="info-card-buttons">
                <button className="info-button green">Стати учнем</button>
                <button className="info-button blue">Отримати консультацію</button>
            </div>
        </div>  
    </section>
  );
}

export default HeroSection;
