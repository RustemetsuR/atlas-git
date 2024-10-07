import React from "react";
import styles from "./bottom_footer.module.css";
import remotionLogo from "@/assets/remotion_logo.svg";
import Image from "next/image";
const BottomFooter = () => {
  return (
    <div className={styles.bottom_footer_block}>
      <p className={styles.copyright_text}>
        © Права защищены Atlas Travel 2024
      </p>
      <p className={styles.remotion_ad}>
        С заботой, компания Remotion
        <Image src={remotionLogo} width={195} height={50} alt="remotion logo" />
      </p>
    </div>
  );
};

export default BottomFooter;
