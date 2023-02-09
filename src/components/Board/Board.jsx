import styles from './Board.module.scss'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../../redux/cardSlice.ts'

const Board = () => {
  const cards = useSelector((state) => state.cards.Cards)
  const dispatch = useDispatch()

  let cardItems = cards.map((card) => {
    return (
      <Card
        cardData={card}
        draggable={true}
      />
    )
  })

  return (
    <>
      <div className={styles.board}>
        <p>Board</p>
        <div className={styles.cards}>
          {cardItems}
              <div href="" onClick={() => dispatch(addCard())} className={styles.close}></div>
        </div>
      </div>
    </>
  )
}

export default Board
