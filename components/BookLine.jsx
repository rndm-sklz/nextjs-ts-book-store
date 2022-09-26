import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/home.module.css';

export default function BookLine({ book, selectedBooks, setSelectedBooks }) {
	const [pcsBookLine, setPcsBookLine] = useState(book.pcs);

	useEffect(() => {
		const tempBook = selectedBooks.find((i) => i.id === book.id);
		if (tempBook) {
			setPcsBookLine(tempBook.pcs);
		}
	}, [selectedBooks, book]);

	function handlerBuyBook() {
		if (pcsBookLine > 0) {
			const cloneBooks = { ...book, pcs: pcsBookLine };
			setSelectedBooks((prev) => (prev
				.filter((selectedBook) => selectedBook.id !== cloneBooks.id)
				.concat([cloneBooks])
			));
		}
	}

	function decr() {
		setPcsBookLine((prevPcsBookLine) => (
			prevPcsBookLine >= 1 && prevPcsBookLine <= 99
				? +prevPcsBookLine - 1
				: prevPcsBookLine
		));
	}

	function incr() {
		setPcsBookLine((prevPcsBookLine) => (
			prevPcsBookLine >= 0 && prevPcsBookLine <= 98
				? +prevPcsBookLine + 1
				: prevPcsBookLine
		));
	}

	function userInput(e) {
		const numerableValue = +e.target.value;
		if (typeof numerableValue === 'number' && !Number.isNaN(numerableValue)) {
			setPcsBookLine(numerableValue);
		} else {
			setPcsBookLine((prevPcsBookLine) => prevPcsBookLine);
		}
	}

	return (
		<div className={styles.lineItem}>
			<div className={styles.coverLine}>
				<Image
					priority
					src={book.cover}
					width={30}
					height={45}
					alt={book.title}
				/>
			</div>
			<div className={styles.lineDecription}>
				<h3 className={styles.lineTitle}>{book.title}</h3>
				<div>
					<p className={styles.lineAuthor}>{book.author}</p>
					<p>{book.year}</p>
				</div>
				<p className={styles.lineGenre}>{book.genre}</p>
				<p className={styles.linePrice}>
					<nobr>${book.price}</nobr>
				</p>
				<div className={styles.linePcsBlock}>
					<span>Quantity:</span>
					<button type="button" onClick={decr}>
						-
					</button>
					<input
						type="text"
						minLength={1}
						maxLength={2}
						required
						value={pcsBookLine}
						onChange={userInput}
						placeholder="0"
					/>
					<button type="button" onClick={incr}>
						+
					</button>
					<span>pcs</span>
				</div>
				<button
					type="button"
					className={styles.lineBuyBtn}
					onClick={handlerBuyBook}
				>
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
		pcs: PropTypes.number,
	}).isRequired,
	selectedBooks: PropTypes.arrayOf(
		PropTypes.shape(
			PropTypes.shape({
				id: PropTypes.number,
				pcs: PropTypes.number,
				author: PropTypes.string,
				imageLink: PropTypes.string,
				title: PropTypes.string,
				year: PropTypes.number,
				price: PropTypes.string,
			}).isRequired,
		),
	).isRequired,
	setSelectedBooks: PropTypes.func.isRequired,
};
