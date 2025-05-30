import { useState } from "react";
import "./App.css";
import Button from "./assets/components/Button";
import Title from "./assets/components/Title";
import BuyButton from "./assets/components/BuyButton";
import Footer from "./assets/components/Footer";

const App = () => {
  //  tableau pour chaque paire de boutons
  const models = [
    { id: "autonomie", model: "Grande Autonomie", price: 90700 },
    { id: "performance", model: "Performance", price: 106700 },
  ];

  const colors = [
    { id: "white", color: "Blanc Nacré multicouche", price: 0 },
    { id: "black", color: "Noir uni", price: 1000 },
  ];

  // Mises a jours des états
  // states
  const [selectedModelId, setSelectedModelId] = useState("autonomie");
  const [selectedColorId, setSelectedColorId] = useState("white");

  // fonction onClick

  const handleModelClick = (id) => {
    setSelectedModelId(id);
  };

  const handleColorClick = (id) => {
    setSelectedColorId(id);
  };
  //  changement de prix
  const selectedModel = models.find((model) => model.id === selectedModelId);
  const selectedColor = colors.find((color) => color.id === selectedColorId);

  const total = selectedModel.price + selectedColor.price;

  return (
    <>
      <header>Telsa Config</header>
      <main>
        <Title title="Sélectionnez votre véhicule" />

        {models.map((model) => (
          <Button
            key={model.id}
            functionOnClick={() => handleModelClick(model.id)}
            className={
              selectedModelId === model.id
                ? "selected-button"
                : "not-selected-button"
            }
            model={model.model}
            price={`${model.price} €`}
          />
        ))}

        <Title title="Sélectionnez la couleur" />

        {colors.map((color) => (
          <Button
            key={color.id}
            functionOnClick={() => handleColorClick(color.id)}
            className={
              selectedColorId === color.id
                ? "selected-button"
                : "not-selected-button"
            }
            color={color.color}
            price={`${color.price} €`}
          />
        ))}

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
      <Footer />
    </>
  );
};

export default App;
