import styles from './Board.module.scss'
import Card from "../Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {addCard} from "../../redux/cardSlice";

const Board = () => {

	const cards = useSelector((state) => state.cards.Cards)
	const dispatch = useDispatch()

	const incrementCardId = () => cards.length

	let cardItems = cards.map((card) => {
		return <Card
			cardID={card.id}
			cardTitle={card.title}
			tasks={card.tasks}
		/>
	})

	return (
		<>
			<div className={styles.board}>
				<p>Board</p>
				<div className={styles.cards}>
					{cardItems}
					<div className={styles.addCardBtnContainer}>
						<button
							className={styles.addCardBtn}
							onClick={() => dispatch(addCard(
								{
									cardId: incrementCardId(),
								}
							))}>
							+ Add another list
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Board;