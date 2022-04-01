import mnemonicWords from "mnemonic-words";

import "./style.css";
import "./skeleton.css";
import "./normalize.css";

const wordsStartingWithN = mnemonicWords.filter((word: string) => word.startsWith("n"));
const wordsStartingWithF = mnemonicWords.filter((word: string) => word.startsWith("f"));
const wordsStartingWithT = mnemonicWords.filter((word: string) => word.startsWith("t"));

const getRandomAcronym = (): string => {
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
