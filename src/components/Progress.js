function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
  question,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> {answer === null ? `+${question.points}` : ""}{" "}
        / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
