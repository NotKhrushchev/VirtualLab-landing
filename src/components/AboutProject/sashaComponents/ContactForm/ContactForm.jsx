import classes from './ContactForm.module.css';

export const ContactForm = () => (
  <div className={classes.container}>
    <form className={classes.form}>
      <label className={classes.label} htmlFor="email">
        <span>Почта</span>
        <input type="text" id="email" placeholder="some@mail.ru" />
      </label>
      <label className={classes.label} htmlFor="email">
        <span>Номер телефона</span>
        <input type="text" id="email" placeholder="88005553535" />
      </label>
      <label className={classes.label} htmlFor="email">
        <span>Адрес проживания</span>
        <input type="text" id="email" placeholder="г. Москва, Малая Семеновская 13" />
      </label>
      <button type="submit" className={classes.button}>Отправить</button>
    </form>
  </div>
)