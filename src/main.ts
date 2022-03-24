import mnemonicWords from "mnemonic-words";

import "./style.css";
import "./skeleton.css";
import "./normalize.css";

const getRandomAcronym = (): string => {
  const wordsStartingWithN = mnemonicWords.filter((word) => word.startsWith("n"));
  const wordsStartingWithF = mnemonicWords.filter((word) => word.startsWith("f"));
  const wordsStartingWithT = mnemonicWords.filter((word) => word.startsWith("t"));

  const letterN = wordsStartingWithN[Math.floor(Math.random() * wordsStartingWithN.length)];
  const letterF = wordsStartingWithF[Math.floor(Math.random() * wordsStartingWithN.length)];
  const letterT = wordsStartingWithT[Math.floor(Math.random() * wordsStartingWithN.length)];

  return letterN + " " + letterF + " " + letterT;
};

const app = document.querySelector<HTMLDivElement>("#app")!;
const genButton = document.querySelector<HTMLButtonElement>("button")!;

genButton!.onclick = () => {
  app.innerText = getRandomAcronym();
};

app.innerText = getRandomAcronym();
