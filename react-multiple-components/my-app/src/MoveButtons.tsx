/* import { useState, useContext } from 'react'; */
type MoveProps = {
  onClick: () => void;
};

export function NextButton({ onClick }: MoveProps) {
  return (
    <>
      <button type="button" onClick={onClick} id="NextButton">
        "Next"
      </button>
    </>
  );
}

export function PrevButton({ onClick }: MoveProps) {
  return (
    <>
      <button type="button" onClick={onClick} id="NextButton">
        "Prev"
      </button>
    </>
  );
}
