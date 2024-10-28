"use client";

import { Roboto } from "next/font/google";
import { useState } from "react";
import Header from "./Components/Header";
import CardComponent from "./Components/CardComponent";
import InputWithButton from "./Components/InputWithButton";
import ButtonGroup from "./Components/ButtonGroup";
import styles from './Home.module.css';

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleToggle = (index) => setSelectedCard(selectedCard === index ? null : index);

  const cardLabels = ["Account Number", "Routing Number", "Bank Name"];

  return (
    <div className={`w-full h-screen flex items-center justify-center ${roboto.className}`} style={{ backgroundColor: "#f0f0f0" }}>
      <div className={styles.container}>
        <Header />
        <div className={styles.cardContainer}>
          {cardLabels.map((label, index) => (
            <CardComponent
              key={index}
              label={label}
              isSelected={selectedCard === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
        <h2 className="section-header">Account Number</h2>
        <h3 className="section-subtext">Will use account number to lookup your bank details</h3>
        <InputWithButton />
        <ButtonGroup />
      </div>
    </div>
  );
}
