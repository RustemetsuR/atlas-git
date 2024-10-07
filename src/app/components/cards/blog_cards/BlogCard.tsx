import React from "react";
import styles from "./blog_cards.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import DarkerFilter from "../../darker_filter/DarkerFilter";
import arrow from "@/assets/icons/blog_arrow.svg";

interface BlogCardsProps {
  src: StaticImageData;
  alt: string;
  isCardBig?: boolean;
  title: string;
  desc?: string;
}

const BlogCards: React.FC<BlogCardsProps> = ({
  src,
  alt,
  isCardBig = false,
  title,
  desc,
}) => {
  return (
    <div
      className={`${styles.blog_card} ${isCardBig ? styles.big_blog_card : ""}`}
    >
      <Link href={"/blog/1"}>
        <DarkerFilter isAllowHover={true} />
        <Image src={src} alt={alt} className={styles.blog_image} />
        <div className={styles.blog_info}>
          <h2 className={styles.blog_title}>
            {title}
          </h2>
          {desc && isCardBig ? (
            <p className={styles.blog_desc}>{desc}</p>
          ) : (
            <></>
          )}
        </div>
      </Link>
    </div>
  );
};

export default BlogCards;
