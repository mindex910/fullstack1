import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    );
  }

  const average = () => {
    return good + neutral * 0 + (bad * -1) / total;
  };

  const positive = () => {
    return (good / total) * 100;
  };

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
        <tr><StatisticLine text="good" value={good} /></tr>
        <tr><StatisticLine text="neutral" value={neutral}/></tr>
        <tr><StatisticLine text="bad" value={bad} /></tr>
        <tr><StatisticLine text="all" value={total} /></tr>
        <tr><StatisticLine text="average" value={average()} /></tr>
        <tr><StatisticLine text="positive" value={positive() + " %"} /></tr>
        </tbody>
      </table>
    </div>
  );
};

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
