import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/home.module.css';

export default function BookCard({ book, selectedBooks, setSelectedBooks }) {
	const [pcsBookCard, setPcsBookCard] = useState(book.pcs);

	useEffect(() => {
		const tempBook = selectedBooks.find((i) => i.id === book.id && i.pcs !== 0);
		if (tempBook) {
			setPcsBookCard(tempBook.pcs);
			localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
		}
	}, [selectedBooks, book]);

	function handlerBuyBook() {
		if (pcsBookCard >= 0) {
			const cloneBooks = { ...book, pcs: pcsBookCard };
			const buyBooks = selectedBooks
				.filter((selectedBook) => selectedBook.id !== cloneBooks.id)
				.concat([cloneBooks]);
			setSelectedBooks(buyBooks);
			localStorage.setItem('selectedBooks', JSON.stringify(buyBooks));
		}
		if (pcsBookCard === 0) {
			const cloneBooks = selectedBooks.filter((selectedBook) => selectedBook.id !== book.id);
			setSelectedBooks(cloneBooks);
			localStorage.setItem('selectedBooks', JSON.stringify(cloneBooks));
		}
	}

	function decr() {
		setPcsBookCard((prevPcsBookCard) => (prevPcsBookCard >= 1 && prevPcsBookCard <= 99
			? +prevPcsBookCard - 1
			: prevPcsBookCard
		));
	}

	function incr() {
		setPcsBookCard((prevPcsBookCard) =>	(prevPcsBookCard >= 0 && prevPcsBookCard <= 98
			? +prevPcsBookCard + 1
			: prevPcsBookCard
		));
	}

	function userInput(e) {
		const numerableValue = +e.target.value;
		if (typeof numerableValue === 'number' && !Number.isNaN(numerableValue)) {
			setPcsBookCard(numerableValue);
		} else {
			setPcsBookCard((prevPcsBookCard) => prevPcsBookCard);
		}
	}

	return (
		<div className={styles.card}>
			<Image
				priority
				src={book.cover}
				width={300}
				height={450}
				alt={book.title}
			/>
			<div className={styles.cardDecription}>
				<h3>{book.title}</h3>
				<p className={styles.genre}>{book.genre}</p>
				<div className={styles.author}>
					<p>{`${book.author}, `}</p>
					<p>{book.year}</p>
				</div>
				<p className={styles.price}>$ {book.price}</p>
				<div className={styles.buyBlock}>
					<div className={styles.cardPcsBlock}>
						<span>Quantity:</span>
						<button type="button" onClick={decr}>
							-
						</button>
						<input
							type="text"
							minLength={1}
							maxLength={2}
							required
							// defaultValue={pcsBookCard}
							value={pcsBookCard}
							onChange={userInput}
							// onFocus={() => setPcsBookCard('')}
							placeholder="0"
						/>
						<button type="button" onClick={incr}>
							+
						</button>
						<span>pcs</span>
					</div>
					<button
						type="button"
						className={styles.buyBtn}
						onClick={handlerBuyBook}
					>
						Buy
					</button>
				</div>
			</div>
		</div>
	);
}

BookCard.propTypes = {
	book: PropTypes.shape({
		id: PropTypes.number,
		pcs: PropTypes.number,
		genre: PropTypes.string,
		author: PropTypes.string,
		cover: PropTypes.string,
		title: PropTypes.string,
		year: PropTypes.number,
		price: PropTypes.number,
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
