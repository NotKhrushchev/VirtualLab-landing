import classes from "./Experiments.module.css";

import fake from "../../../../images/fake.png";

export const Experiments = () => {
  return (
    <div className={classes.experiments}>
      <div className={classes.experiment}>
        <img src={fake} alt="" />
        <span className={classes.experimentTitle}>Эксперимент</span>
        <span className={classes.experimentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis est aperiam </span>
      </div>
      <div className={classes.experiment}>
        <img src={fake} alt="" />
        <span className={classes.experimentTitle}>Эксперимент</span>
        <span className={classes.experimentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis est aperiam </span>
      </div>
      <div className={classes.experiment}>
        <img src={fake} alt="" />
        <span className={classes.experimentTitle}>Эксперимент</span>
        <span className={classes.experimentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis est aperiam </span>
      </div>
      <div className={classes.experiment}>
        <img src={fake} alt="" />
        <span className={classes.experimentTitle}>Эксперимент</span>
        <span className={classes.experimentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis est aperiam </span>
      </div>
    </div>
  );
};
