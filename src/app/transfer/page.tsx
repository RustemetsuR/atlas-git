"use client";

import React from "react";
import styles from "./page.module.css";
import TicketForm from "../components/pages/main_page/date_picker_section/TicketFormComponent/TicketForm";
import Container from "../components/layout/container/Container";
import OffersBlock from "../components/pages/main_page/offer_section/OfferBlock";

import photo_1 from "@/assets/3407438d256d758b4d89eb2565169df9.jpeg";
import photo_2 from "@/assets/6901c49957fdd359d9efbee42e4bb608.jpeg";
import DarkerFilter from "../components/darker_filter/DarkerFilter";
import MainCard from "../components/cards/main_cards/MainCard";

import image_1 from "@/assets/ticket_cards/tours/image_1.jpeg";
import image_2 from "@/assets/ticket_cards/tours/image_2.jpeg";
import image_3 from "@/assets/ticket_cards/tours/image_3.jpeg";
import image_4 from "@/assets/ticket_cards/tours/image_4.jpeg";
import image_5 from "@/assets/ticket_cards/tours/image_5.jpeg";
import image_6 from "@/assets/ticket_cards/tours/image_6.jpeg";
import image_7 from "@/assets/ticket_cards/tours/image_7.jpeg";
import image_8 from "@/assets/ticket_cards/tours/image_8.jpeg";
import image_9 from "@/assets/ticket_cards/tours/image_9.jpeg";
import image_10 from "@/assets/ticket_cards/tours/image_10.jpeg";
import image_11 from "@/assets/ticket_cards/tours/image_11.jpeg";
import image_12 from "@/assets/ticket_cards/tours/image_12.jpeg";
import OffersList from "../components/pages/offers_cards_list/OffersList";

export default function Tours({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const images = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_10,
    image_11,
    image_12,
  ];
  const ideaOffers = [];

  for (let i = 0; i < 8; i++) {
    let imageSrc;
    if (i % 2 == 0) {
      imageSrc = photo_1;
    } else {
      imageSrc = photo_2;
    }

    ideaOffers.push({
      image: imageSrc,
      alt: "image 1",
      title: "Дом на воде",
      desc: "Дубай",
    });
  }

  const toursOffers = [];

  for (let i = 0; i < 12; i++) {
    toursOffers.push({
      image: images[i],
      alt: "Турция, Мармарис",
      rating: 8.4,
      commentQuantity: 10,
      title: "Наименование тура",
      desc: "ОАЭ, Дубай",
    });
  }

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = toursOffers.slice(start, end);

  return (
    <main className={styles.transfer_page_main}>
      <section className={styles.ticket_picker_block}>
        <DarkerFilter />
        <Container>
          <TicketForm />
        </Container>
      </section>

      <OffersList
        per_page={per_page}
        itemQuantity={toursOffers.length}
        url={"/transfer"}
      >
        {entries.map((offer, index) => (
          <MainCard
            key={index}
            imageSrc={offer.image}
            title={offer.title}
            rating={offer.rating}
            commentQuantity={offer.commentQuantity}
            desc={offer.desc}
            alt={offer.alt}
            linkTo="/"
          />
        ))}
      </OffersList>

      <section>
        <Container>
          <OffersBlock offerTitle="Идеи для отдыха" slides={ideaOffers} />
        </Container>
      </section>
    </main>
  );
}
