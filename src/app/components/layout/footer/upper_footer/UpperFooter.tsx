import React from "react";
import styles from "./upper_footer.module.css";
import Image from "next/image";
import logo from "@/assets/logo_dark.svg";
import Whatsapp from "../../../cards/social_icons/Whatsapp";
import Telegram from "../../../cards/social_icons/Telegram";
import Instagram from "../../../cards/social_icons/Instagram";
import TikTok from "../../../cards/social_icons/TikTok";
import FaceBook from "../../../cards/social_icons/FaceBook";
import YouTube from "../../../cards/social_icons/YouTube";
import Link from "next/link";

import phoneIcon from "@/assets/icons/hugeicons_call.svg";
import mailIcon from "@/assets/icons/hugeicons_mail-01.svg";
import geoIcon from "@/assets/icons/hugeicons_location-05.svg";
import SocialIconsList from "@/app/components/cards/social_icons/SocialIconsList";

const UpperFooter = () => {
  return (
    <div className={styles.upper_footer_block}>
      <div className={styles.company_info}>
        <Image
          className={styles.company_logo}
          src={logo}
          width={350}
          height={50}
          alt="atlas logo"
        />

        <SocialIconsList />

        <nav className={styles.politic_nav}>
          <ul className={styles.politic_link_list}>
            <li className={styles.politic_link_list_item}>
              <Link className={styles.politic_link} href={"/privacy-policy"}>
                Политика конфиденциальности
              </Link>
            </li>
            <li className={styles.politic_link_list_item}>
              <Link className={styles.politic_link} href={"/user-agreement"}>
                Пользовательское соглашение
              </Link>
            </li>
            <li className={styles.politic_link_list_item}>
              <Link className={styles.politic_link} href={"/return-policy"}>
                Условия возврата
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.company_contacts}>
        <h6 className={styles.section_title}>Контакты</h6>
        <ul className={styles.contacts_list}>
          <li className={styles.contacts_list_item}>
            <Image src={phoneIcon} alt="Phone Icon" width={24} height={24} />
            +996 700 123 123
          </li>
          <li className={styles.contacts_list_item}>
            <Image src={phoneIcon} alt="Phone Icon" width={24} height={24} />
            +996 700 123 123
          </li>
          <li className={styles.contacts_list_item}>
            <Image src={mailIcon} alt="Mail Icon" width={24} height={24} />
            email@gmail.com
          </li>
          <li className={styles.contacts_list_item}>
            <Image src={geoIcon} alt="Geo Icon" width={24} height={24} />
            г.Бишкек, ул.Горького 14
          </li>
        </ul>
      </div>
      <div className={styles.company_menu}>
        <h6 className={styles.section_title}>Меню</h6>
        <ul className={styles.menu_list}>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={"/"}>
              Главная
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={"/about"}>
              О нас
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={"/tours"}>
              Туры
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={"/air_tickets"}>
              Авиабилеты
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={"/hotels"}>
              Отели
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={"/transfer"}>
              Трансфер
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={"/blog"}>
              Блог
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={"/services"}>
              Услуги
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={"/contacts"}>
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UpperFooter;
