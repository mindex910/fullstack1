import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      anecdote: "If it hurts, do it more often.",
      voteCount: 0,
    },
    {
      anecdote: "Adding manpower to a late software project makes it later!",
      voteCount: 0,
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      voteCount: 0,
    },
    {
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      voteCount: 0,
    },
    {
      anecdote: "Premature optimization is the root of all evil.",
      voteCount: 0,
    },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      voteCount: 0,
    },
    {
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
      voteCount: 0,
    },
    {
      anecdote: "The only way to go fast, is to go well.",
      voteCount: 0,
    },
  ]);

  const [selected, setSelected] = useState(0);

  const randomClick = () => {
    const randomNum = Math.floor(
      Math.random() * (anecdotes.length - 1 - 0 + 1)
    );
    console.log(randomNum);
    if (randomNum !== selected) {
      setSelected(randomNum);
    } else {
      randomClick();
    }
  };

  const voting = () => {
    let newAnecdotes = structuredClone(anecdotes);
    newAnecdotes[selected] = {
      ...anecdotes[selected],
      voteCount: anecdotes[selected].voteCount + 1,
    };
    console.log(newAnecdotes);
    setAnecdotes(newAnecdotes);
  };

  const mostVotes = () => {
    let winner = anecdotes[0];
    anecdotes.forEach((anectode) => {
      if (winner.voteCount < anectode.voteCount) {
        winner = anectode
      }
    });
    return winner
  };

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected].anecdote}
      </div>
      <div>
        <h4>Has {anecdotes[selected].voteCount} votes</h4>
        <Button onClick={voting} text="vote" />
        <Button onClick={randomClick} text="next anecdote" />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        {mostVotes().anecdote}
        <h4>Has {mostVotes().voteCount} votes</h4>
      </div>
    </>
  );
};

export default App;
