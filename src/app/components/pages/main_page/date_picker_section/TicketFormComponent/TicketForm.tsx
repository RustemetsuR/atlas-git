import React from "react";
import styles from "./ticket_form.module.css";

const TicketForm = () => {
  return (
    <form className={styles.ticket_picker_form}>
      <div className={styles.input_section}>
        <label htmlFor="from">Откуда</label>
        <input type="text" name="from" />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="to">Куда</label>
        <input type="text" name="to" />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="to_date">Туда</label>
        <input type="text" name="to_date" />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="back_date">Обратно</label>
        <input type="text" name="back_date" />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="passangers">Пассажиры и класс</label>
        <input type="text" name="passangers" />
      </div>
      <div className={`${styles.input_section} ${styles.button}`}>
        <button>Подобрать</button>
      </div>
    </form>
  );
};

export default TicketForm;
