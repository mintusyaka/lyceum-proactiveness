import './ClassesSection.css';

import PrimarySchoolImg from '../../assets/images/primary-school3.png';
import MiddleSchoolImg from '../../assets/images/middle-school.png';
import HighSchoolImg from '../../assets/images/high-school.png';

function ClassesSection() {
  return (
    <section className="classes">
      <div className="classes-grid">

        <div className="class-card">
          <img src={PrimarySchoolImg} alt="Початкова школа" />
          <div className="class-info primary">
            <h3>Початкова школа<br />1-4 класи</h3>
          </div>
        </div>

        <div className="class-card">
          <img src={MiddleSchoolImg} alt="Початкова школа" />
          <div className="class-info middle">
            <h3>Середня школа<br />5-9 класи</h3>
          </div>
        </div>

        <div className="class-card">
          <img src={HighSchoolImg} alt="Початкова школа" />
          <div className="class-info high">
              <h3>Профільна школа<br />10-11 класи</h3>
          </div>
        </div>
{/* 
        <div className="class-card">
          <img src="/assets/images/middle-school.jpg" alt="Середня школа" />
          <div className="class-info middle">
            <h3>Середня школа<br />5-9 класи</h3>
            <div className="arrow"><FaArrowRight /></div>
          </div>
        </div>

        <div className="class-card">
          <img src="/assets/images/high-school.jpg" alt="Профільна школа" />
          <div className="class-info high">
            <h3>Профільна школа<br />10-11 класи</h3>
            <div className="arrow"><FaArrowRight /></div>
          </div>
        </div> */}

        <div className="class-card small">
          <div className="class-info extramural">
            <h3>Екстернат онлайн</h3>
          </div>
        </div>

        <div className="class-card small">
          <div className="class-info free-listener">
            <h3>Формат<br />"Вільний слухач"</h3>
          </div>
        </div>

        <div className="class-card small">
          <div className="class-info prep-school">
            <h3>Підготовка до школи<br />онлайн</h3>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ClassesSection;
