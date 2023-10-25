import classes from "./WhyBest.module.css";

import fake from "../../../../images/fake.png";

export const WhyBest = () => {
  return (
    <div className={classes.whyBestItems}>
      <div className={classes.whyBestItem}>
        <img src={fake} alt="" />
        <span className={classes.whyBestItemTitle}>Преимущество</span>
      </div>
      <div className={classes.whyBestItem}>
        <img src={fake} alt="" />
        <span className={classes.whyBestItemTitle}>Преимущество</span>
      </div>
      <div className={classes.whyBestItem}>
        <img src={fake} alt="" />
        <span className={classes.whyBestItemTitle}>Преимущество</span>
      </div>
      <div className={classes.whyBestItem}>
        <img src={fake} alt="" />
        <span className={classes.whyBestItemTitle}>Преимущество</span>
      </div>
    </div>
  );
};
