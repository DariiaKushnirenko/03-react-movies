import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import { useState } from "react";
import type { Votes, VoteType } from "../../types/votes";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

export default function App() {
  const initialVotes: Votes = (
    {
      good: 0,
      neutral: 0,
      bad: 0
    }    
  );

const [votes, setVotes] = useState<Votes>(initialVotes);

const handleVote = (type:VoteType) => {
  setVotes(prevVotes => ({
    ...prevVotes,
    [type]: prevVotes[type] + 1
  }));
};

  const resetVotes = () => setVotes(initialVotes);
  
  const total = votes.good + votes.neutral + votes.bad;
  const positiveRate = total ? Math.round((votes.good / total) * 100) : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={total > 0} />
      {total > 0 ? (
  <VoteStats votes={votes} totalVotes={total} positiveRate={positiveRate} />
) : (
  <Notification />
)}
  </div>
  );
}