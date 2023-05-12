import SedansLogo from '../../src/icon-sedans.svg';
import SuvsLogo from '../../src/icon-suvs.svg';
import LuxuryLogo from '../../src/icon-luxury.svg';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div>
      <div className={classes.firstColumn}>
        <img src={SedansLogo} />
        <h1 className={classes.title}>SEDANS</h1>
        <p className={classes.description}>
          Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next
          road trip.
        </p>
        <p className={classes.learnMore}>Learn More</p>
      </div>
      <div className={classes.secondColumn}>
        <img src={SuvsLogo} />
        <h1 className={classes.title}>SUVS</h1>
        <p className={classes.description}>
          Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road
          adventures.
        </p>
        <p className={classes.learnMore}>Learn More</p>
      </div>
      <div className={classes.thirdColumn}>
        <img src={LuxuryLogo} />
        <h1 className={classes.title}>LUXURY</h1>
        <p className={classes.description}>
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive
          in style.
        </p>
        <p className={classes.learnMore}>Learn More</p>
      </div>
      <div className={classes.whiteSpace}></div>
    </div>
  );
};

export default Card;
