"use client";

import React, { useEffect, useState } from "react";
import styles from "./bottom_header.module.css";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomHeader = () => {
  const [activeNav, setActiveNav] = useState("main");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navArr = [
    {
      title: "Главная",
      pathname: "/",
    },
    {
      title: "О Нас",
      pathname: "/about",
    },
    {
      title: "Туры",
      pathname: "/tours",
    },
    {
      title: "Авиа Билеты",
      pathname: "/air_tickets",
    },
    {
      title: "Отели",
      pathname: "/hotels",
    },
    {
      title: "Трансфер",
      pathname: "/transfer",
    },
    {
      title: "Блог",
      pathname: "/blog",
    },
    {
      title: "Услуги",
      pathname: "/services",
    },
    {
      title: "Контакты",
      pathname: "/contacts",
    },
  ];

  const handleLinkClick = (navTitle: string) => {
    setActiveNav(navTitle);
    setIsSidebarOpen(false);
  };

  const toggleSideBar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const currentNav = navArr.find((item) => {
      return (
        pathname === item.pathname || pathname.startsWith(item.pathname + "/")
      );
    });

    if (currentNav) setActiveNav(currentNav.title);
  }, [pathname]);

  return (
    <div className={styles.bottom_header}>
      <Link href="/">
        <Image
          className={styles.header_logo}
          src={logo}
          width={245}
          height={37.5}
          alt="Atlas Travel Logo"
          layout="responsive"
        />
      </Link>
      <nav>
        <ul
          className={`${styles.global_nav_list} ${
            isSidebarOpen ? styles.open : ""
          }`}
        >
          {navArr.map((item) => (
            <li className={styles.global_nav_list_item} key={item.title}>
              <Link
                className={[
                  styles.global_nav_link,
                  activeNav === item.title ? styles.active_nav : "",
                ].join(" ")}
                href={item.pathname}
                onClick={() => handleLinkClick(item.title)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.nav_aside_button} onClick={toggleSideBar}>
        <div className={styles.hamburger_icon} id="icon">
          <div
            className={`${styles.icon_1} ${isSidebarOpen ? styles.a : ""}`}
            id="a"
          ></div>
          <div
            className={`${styles.icon_2} ${isSidebarOpen ? styles.c : ""}`}
            id="b"
          ></div>
          <div
            className={`${styles.icon_3} ${isSidebarOpen ? styles.b : ""}`}
            id="c"
          ></div>

          <div className={styles.clear}></div>
        </div>
      </button>
    </div>
  );
};

export default BottomHeader;
