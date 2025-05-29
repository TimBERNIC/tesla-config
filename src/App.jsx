import { useState } from "react";
import "./App.css";
import Button from "./assets/components/Button";
import Title from "./assets/components/Title";
import BuyButton from "./assets/components/BuyButton";

const App = () => {
  // Mises a jours des états
  const [isSelected1, setIsSelected1] = useState(true);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [isSelected4, setIsSelected4] = useState(false);
  const [modelPrice, setModelPrice] = useState(90700);
  const [colorPrice, setColorPrice] = useState(0);

  const [total, setTotal] = useState(90700);

  // objets teslas models et colors + function on click

  const autonomieModel = {
    model: "Grande Autonomie",
    price: 90700,
  };

  const autonomieModelFunction = () => {
    isSelected1 === false && setModelPrice(autonomieModel.price);
    setIsSelected1(true);
    setIsSelected2(false);
    setTotal(autonomieModel.price + colorPrice);
  };
  const performanceModel = {
    model: "Performance",
    price: 106700,
  };

  const performanceModelFunction = () => {
    isSelected2 === false && setModelPrice(performanceModel.price);
    setIsSelected2(true);
    setIsSelected1(false);
    setTotal(performanceModel.price + colorPrice);
  };
  const blancColor = {
    color: "Blanc Nacré multicouche",
    price: 0,
  };

  const blancColorFunction = () => {
    isSelected3 === false && setColorPrice(blancColor.price);
    setIsSelected3(true);
    setIsSelected4(false);
    setTotal(modelPrice + blancColor.price);
  };
  const blackColor = {
    color: "Noir uni",
    price: 1000,
  };
  const blackColorFunction = () => {
    isSelected4 === false && setColorPrice(blackColor.price);
    setIsSelected4(true);
    setIsSelected3(false);
    setTotal(modelPrice + blackColor.price);
  };

  return (
    <>
      <header>Telsa Config</header>
      <main>
        <Title title="Sélectionnez votre véhicule" />
        <Button
          functionOnClick={() => {
            autonomieModelFunction();
          }}
          className={isSelected1 ? "selected-button" : "not-selected-button"}
          model={autonomieModel.model}
          price={autonomieModel.price + " €"}
        />
        <Button
          functionOnClick={() => {
            performanceModelFunction();
          }}
          className={isSelected2 ? "selected-button" : "not-selected-button"}
          model={performanceModel.model}
          price={performanceModel.price + " €"}
        />
        <Title title="Sélectionnez la couleur" />
        <Button
          functionOnClick={() => {
            blancColorFunction();
          }}
          className={isSelected3 ? "selected-button" : "not-selected-button"}
          model={blancColor.color}
          price={blancColor.price + " €"}
        />

        <Button
          functionOnClick={() => {
            blackColorFunction();
          }}
          className={isSelected4 ? "selected-button" : "not-selected-button"}
          model={blackColor.color}
          price={blackColor.price + " €"}
        />

        <div className="last-box">
          <div className="total-box">{total + " €"}</div>
          <BuyButton
            className="buy-button"
            title="Buy !"
            functionOnClick={() => {
              alert("Thanks for Clicking");
            }}
          />
        </div>
      </main>

      <footer>
        <div className="container">
          This exercice was made with{" "}
          <span className="footer-caracters"> React </span> by
          <a href="https://github.com/TimBERNIC" className="footer-caracters">
            {" "}
            TimBERNIC{" "}
          </a>{" "}
          with
          <a href="https://www.lereacteur.io/" className="footer-caracters">
            {" "}
            LE REACTEUR{" "}
          </a>
        </div>
      </footer>
    </>
  );
};

export default App;
