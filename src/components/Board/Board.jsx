import styles from "./Board.module.scss";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addCard, changeBoardTitle } from "../../redux/cardSlice.ts";
import React from "react";

const Board = () => {
  const cards = useSelector((state) => state.cards.Cards);
  const boardTitle = useSelector((state) => state.cards.boardTitle);
  const dispatch = useDispatch();

  const myRef = React.createRef();

  let changeBoardTitleText = () => {
    dispatch(changeBoardTitle({ text: myRef.current.value }));
  };

  let cardItems = cards.map((card) => {
    return (
      <Card
        cardData={card}
        draggable={true}
      />
    );
  });

  return (
    <>
      <div className={styles.board}>
        <input className={styles.boardTitle}
               value={boardTitle}
               ref={myRef}
               onChange={changeBoardTitleText}
        />
        <div className={styles.cards}>
          {cardItems}
          <div className="addCardBtnContainer">
            <div
              href=""
              onClick={() => dispatch(addCard())}
              className="addCardBtn"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
