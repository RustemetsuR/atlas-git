import React from "react";
import styles from "./consult_form.module.css";
import Image from "next/image";
import person from "@/assets/person/61707a9cb228242dcf1d7bf90c3323c9.png";
import phone from "@/assets/icons/carbon_phone.svg";
import Whatsapp from "../../cards/social_icons/Whatsapp";
import Telegram from "../../cards/social_icons/Telegram";
import Instagram from "../../cards/social_icons/Instagram";
import Container from "../../layout/container/Container";

const ConsultForm = () => {
  return (
    <section className={styles.request_block}>
      <Container>
        <div className={styles.request_block_inner}>
          <div className={styles.form_block}>
            <h4 className={styles.form_block_title}>
              Для консультации оставьте заявку
            </h4>
            <p className={styles.form_block_desc}>
              Если у вас есть вопросы, то вы можете оставить свой номер телефона
              и наши специалисты обязательно с вами свяжутся в кратчайшее время.
              Мы всегда рады Вам помочь!
            </p>

            <form className={styles.request_form}>
              <input type="tel" placeholder="Номер телефона" />
              <button typeof="sumbit">Отправить</button>
            </form>
          </div>

          <div className={styles.consultant_block}>
            <Image
              className={styles.consultant_image}
              src={person}
              width={300}
              height={414}
              alt="Давыдова Карина Консультант"
            />

            <div className={styles.consultant_info}>
              <p className={styles.consultant_name}>Давыдова Карина</p>
              <p className={styles.consultant_work}>Консультант</p>
              <p className={styles.consultant_phone}>
                <Image src={phone} width={20} height={20} alt="Phone Icon" />
                +92 31304754657
              </p>
              <div className={styles.consultant_contacts}>
                <Whatsapp />
                <Telegram />
                <Instagram />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ConsultForm;
