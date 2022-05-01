import React from "react";
import Backed from "./Components/Backed";
import ContentProject from "./Components/ContentProject";
import ImageFondo from "./Components/ImageFondo";
import ItemsProject from "./Components/ItemsProject";
import Mahogany from "./Components/Mahogany";
import Mastercraft from "./Components/Mastercraft";
import Nav from "./Components/Nav";

const buyItems = [
  {
    name: "Bamboo Stand",
    price: "Pledge $25 or more",
    text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    number: "101",
    left:"left",
    valueBtn: "Select Reward",
  },

  {
    name: "Black Edition Stand",
    price: "Pledge $75 or more",
    text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    number: "64",
    left:"left",
    valueBtn: "Select Reward",
  },
];

function App() {
  return (
    <>
      <Nav />
      <ImageFondo />
      <Mastercraft />
      <Backed />
      <ContentProject>
        {buyItems.map((el) => (
          <ItemsProject
           key={el.name}
           name={el.name}
           price={el.price}
           text={el.text}
           number={el.number}
           left={el.left}
           valueBtn={el.valueBtn}
           />
        ))}
        <Mahogany/>
      </ContentProject>
    </>
  );
}

export default App;
