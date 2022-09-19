import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/home.module.css';
import Context from './context/context';

export default function BookLine({ book }) {
	const [pcsBookList, setPcsBookList] = useState();
	const { countPcs, setCountPcs } = useContext(Context);

	function decr() {
		// eslint-disable-next-line max-len
		setPcsBookList((prevPcsBookList) => (prevPcsBookList >= 1 && prevPcsBookList <= 99 ? +prevPcsBookList - 1 : prevPcsBookList));
	}

	function incr() {
		// eslint-disable-next-line max-len
		setPcsBookList((prevPcsBookList) => (prevPcsBookList >= 0 && prevPcsBookList <= 98 ? +prevPcsBookList + 1 : prevPcsBookList));
	}

	function userInput(e) {
		const numerableValue = +e.target.value;
		if (typeof numerableValue === 'number' && !Number.isNaN(numerableValue)) {
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
						type="text"
						minLength={1}
						maxLength={2}
						required
						// defaultValue={pcsBookList}
						value={pcsBookList}
						onChange={userInput}
						// onFocus={() => setPcsBookList('')}
						placeholder="0"
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
