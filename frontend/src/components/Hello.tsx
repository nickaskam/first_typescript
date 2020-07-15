import React, { Fragment } from "react";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onReset?: () => void;
}

function Hello({
  name,
  enthusiasmLevel = 1,
  onIncrement,
  onDecrement,
  onReset,
}: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <Fragment>
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div className="incrementButtons">
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
      <div className="resetButton">
        <button onClick={onReset}>Reset</button>
      </div>
    </Fragment>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
