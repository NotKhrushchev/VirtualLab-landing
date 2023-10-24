import classes from "./AboutUsLine1.module.css";

import photo from '../../../images/univerpoliteh.png'

export const AboutUsLine1 = () => {
  return (
    <div className={classes.aboutUsLine}>
      <span>
        Мы - команда студентов второго курса Московского Политехнического
        Университета - флагмана проектного обучения в России.
      </span>
      <img src={photo} alt='politeh' />
    </div>
  );
};
