import React from "react";

const objektMetoder = [
  {
    name: "Object.keys()",
    description:
      "Returnerar en array med en given objekts alla egna enumerabla egenskapsnamn.",
  },
  {
    name: "Object.values()",
    description:
      "Returnerar en array med en given objekts alla egna enumerabla egenskapsvärden.",
  },
  {
    name: "Object.entries()",
    description:
      "Returnerar en array med en given objekts alla egna enumerabla sträng-nycklade egenskaps [nyckel, värde]-par.",
  },
  {
    name: "Object.assign()",
    description:
      "Kopierar alla enumerabla egna egenskaper från en eller flera källobjekt till ett målobjekt.",
  },
  {
    name: "Object.freeze()",
    description:
      "Frysar ett objekt: det vill säga förhindrar nya egenskaper från att läggas till, befintliga egenskaper från att tas bort, och befintliga egenskaper, eller deras uppräknelighet, konfigurerbarhet, eller skrivbarhet, från att ändras.",
  },
  {
    name: "Object.seal()",
    description:
      "Förhindrar att nya egenskaper läggs till i ett objekt och markerar alla befintliga egenskaper som icke-konfigurerbara.",
  },
];

const ObjectMethods = () => {
  return <div>ObjectMethods</div>;
};

export default ObjectMethods;
