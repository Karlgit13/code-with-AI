import React, { useState } from "react";

const arrayMetoder = [
  {
    step: 1,
    name: "push()",
    description:
      "Lägger till ett eller flera element i slutet av en array och returnerar den nya längden på arrayen.",
  },
  {
    step: 2,
    name: "pop()",
    description:
      "Tar bort det sista elementet från en array och returnerar det elementet.",
  },
  {
    step: 3,
    name: "shift()",
    description:
      "Tar bort det första elementet från en array och returnerar det elementet, samtidigt som den ändrar längden på arrayen.",
  },
  {
    step: 4,
    name: "unshift()",
    description:
      "Lägger till ett eller flera element i början av en array och returnerar den nya längden på arrayen.",
  },
  {
    step: 5,
    name: "forEach()",
    description: "Utför en funktion en gång för varje element i arrayen.",
  },
  {
    step: 6,
    name: "map()",
    description:
      "Skapar en ny array med resultatet av att anropa en funktion för varje arrayelement.",
  },
  {
    step: 7,
    name: "filter()",
    description:
      "Skapar en ny array med alla element som passerar ett test (tillhandahållet som en funktion).",
  },
  {
    step: 8,
    name: "reduce()",
    description:
      "Applicerar en funktion mot ett ackumulatorvärde och varje värde av arrayen (från vänster till höger) för att reducera det till ett enda värde.",
  },
  {
    step: 9,
    name: "slice()",
    description:
      "Returnerar en ytlig kopia av en del av en array till en ny arrayobjekt.",
  },
  {
    step: 10,
    name: "splice()",
    description:
      "Ändrar innehållet i en array genom att ta bort eller ersätta befintliga element och/eller lägga till nya element.",
  },
];

const ArrayMethods = () => {
  const [currentStep, setCurrentStep] = useState();
  const [userInput, setUserInput] = useState("");

  const currentMethod = arrayMetoder.find(
    (method) => method.step === currentStep
  );

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const runTest = () => {};

  if (currentStep < arrayMetoder.legnth) {
    setCurrentStep(currentStep + 1);
    setUserInput("");
  } else {
    alert("alla test klara");
  }

  return (
    <div className="ArrayMetoder">
      <div>
        <h1>ArrayMetoder - Övningar</h1>
      </div>
      <div></div>
    </div>
  );
};

export default ArrayMethods;
