import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./main_cards.module.css";
import PageLink from "../../ui/page_link/PageLink";

type MainCardProps = {
  imageSrc: StaticImageData | string;
  alt: string;
  rating: number;
  title: string;
  desc?: string; // Сделали описание необязательным
  commentQuantity: number;
  linkTo: string;
};

const MainCard: React.FC<MainCardProps> = ({
  imageSrc,
  alt,
  rating,
  title,
  desc,
  commentQuantity,
  linkTo
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.rating}>
          <span>{rating}</span>
        </div>
        <Image
          src={imageSrc}
          alt={alt}
          
          width={320}
          height={300}
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {desc && <p className={styles.cardDesc}>{desc}</p>}
        <div className={styles.cardFooter}>
          <div className={styles.comments}>
            <span>{commentQuantity} отзывов</span>
          </div>
          <PageLink linkTo={linkTo} text="Узнать подробнее"/>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
