import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    console.log("Goods: ", updatedGood);
  };

  const neutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    console.log("Neutrals: ", updatedNeutral);
  };

  const badClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    console.log("Bads: ", updatedBad);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodClick} text="good" />
      <Button onClick={neutralClick} text="neutral" />
      <Button onClick={badClick} text="bad" />
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
    </div>
  );
};

export default App;
