import classes from "./Feeds.module.css";

import fake from "../../../../images/fake.png";

export const Feeds = () => {
  return (
    <div className={classes.feeds}>
      <div className={classes.feed}>
        <img src={fake} alt="" />
        <div className={classes.textWrapper}>
          <div className={classes.feedName}>Эксперимент</div>
          <span className={classes.feedText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sapiente, iure aperiam nam, eveniet temporibus quae fugit blanditiis
            veritatis nostrum iste, sequi quod harum quos optio ut non. Animi,
            quisquam?
          </span>
        </div>
      </div>
      <div className={classes.feed}>
        <img src={fake} alt="" />
        <div className={classes.textWrapper}>
          <div className={classes.feedName}>Эксперимент</div>
          <span className={classes.feedText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sapiente, iure aperiam nam, eveniet temporibus quae fugit blanditiis
            veritatis nostrum iste, sequi quod harum quos optio ut non. Animi,
            quisquam?
          </span>
        </div>
      </div>
      <div className={classes.feed}>
        <img src={fake} alt="" />
        <div className={classes.textWrapper}>
          <div className={classes.feedName}>Эксперимент</div>
          <span className={classes.feedText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sapiente, iure aperiam nam, eveniet temporibus quae fugit blanditiis
            veritatis nostrum iste, sequi quod harum quos optio ut non. Animi,
            quisquam?
          </span>
        </div>
      </div>
      <div className={classes.feed}>
        <img src={fake} alt="" />
        <div className={classes.textWrapper}>
          <div className={classes.feedName}>Эксперимент</div>
          <span className={classes.feedText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sapiente, iure aperiam nam, eveniet temporibus quae fugit blanditiis
            veritatis nostrum iste, sequi quod harum quos optio ut non. Animi,
            quisquam?
          </span>
        </div>
      </div>
    </div>
  );
};
