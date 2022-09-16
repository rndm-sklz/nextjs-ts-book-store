import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/home.module.css';
import Context from './context/context';

export default function BookLine({ book }) {
	const [pcsBookList, setPcsBookList] = useState(0);
	const { countPcs, setCountPcs } = useContext(Context);

	function decr() {
		setPcsBookList((prevPcsBookList) => +prevPcsBookList - 1);
	}

	function incr() {
		setPcsBookList((prevPcsBookList) => +prevPcsBookList + 1);
	}

	function userInput(e) {
		const numerableValue = +e.target.value;

		if (typeof numerableValue === 'number') {
			setPcsBookList(numerableValue);
		} else {
			setPcsBookList((prevPcsBookList) => prevPcsBookList);
		}
	}

	console.log(typeof pcsBookList);

	return (
		<div className={styles.lineItem}>
			<div className={styles.coverLine}>
				<Image
					priorityv
					src={book.cover}
					width={30}
					height={45}
					alt={book.title}
				/>
			</div>
			<div className={styles.lineDecription}>
				<h3 className={styles.lineTitle}>{book.title}</h3>
				<p className={styles.lineAuthor}>{book.author}</p>
				<p className={styles.lineGenre}>{book.genre}</p>
				<p className={styles.linePrice}>$ {book.price}</p>
				<div className={styles.linePcsBlock}>
					<span>Quantity:</span>
					<button type="button" onClick={decr}>-</button>
					<input
						type="number"
						min={1}
						max={10}
						required
						// defaultValue={pcsBookList}
						value={pcsBookList}
						onChange={userInput}
					/>
					<button type="button" onClick={incr}>+</button>
					<span>pcs</span>
				</div>
				<button type="button" className={styles.lineBuyBtn}>
					Buy
				</button>
			</div>
		</div>
	);
}

BookLine.propTypes = {
	book: PropTypes.shape({
		id: PropTypes.number,
		genre: PropTypes.string,
		author: PropTypes.string,
		cover: PropTypes.string,
		title: PropTypes.string,
		year: PropTypes.number,
		price: PropTypes.number,
	}).isRequired,
};
