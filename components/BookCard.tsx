import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Context from 'components/Context';
import type { Book } from 'pages/types';
import styles from 'styles/home.module.less';

export default function BookCard({
	book,
}: {
	book: Book;
}) {
	const { selectedBooks, setSelectedBooks } = useContext(Context);
	const [pcsBookCard, setPcsBookCard] = useState(book.pcs);

	useEffect(() => {
		const tempBook = selectedBooks.find((i) => i.id === book.id);
		if (tempBook) {
			setPcsBookCard(tempBook.pcs);
			localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
		}
	}, [selectedBooks, book]);

	function handlerBuyBook() {
		if (pcsBookCard >= 0) {
			const cloneBooks = { ...book, pcs: pcsBookCard };
			setSelectedBooks((prev) => {
				const temp = prev
					.filter((selectedBook) => selectedBook.id !== cloneBooks.id)
					.concat([cloneBooks]);
				localStorage.setItem('selectedBooks', JSON.stringify(temp));
				return temp;
			});
		}
		if (pcsBookCard === 0) {
			setSelectedBooks((prev) => {
				const temp = prev
					.filter((selectedBook) => selectedBook.id !== book.id);
				localStorage.setItem('selectedBooks', JSON.stringify(temp));
				return temp;
			});
		}
	}

	function decr() {
		/* Здесь и в incr, Можно упростить логику,
		чтобы не сетить предыдущее значение при невыполнении условия.
		В decr условие pcsBookCard <= 99 тоже не имеет необходимости

		Также нет необходимости делать каст к числу, т.к. тип твоего useState
		и так number

		if (pcsBookCard >= 1) {
			setPcsBookCard((prev) => prev - 1);
		}
		*/
		setPcsBookCard((prevPcsBookCard) => (prevPcsBookCard >= 1 && prevPcsBookCard <= 99
			? +prevPcsBookCard - 1
			: prevPcsBookCard
		));
	}

	function incr() {
		setPcsBookCard((prevPcsBookCard) => (prevPcsBookCard >= 0 && prevPcsBookCard <= 98
			? +prevPcsBookCard + 1
			: prevPcsBookCard
		));
	}

	function userInput(e: React.ChangeEvent<HTMLInputElement>) {
		const numerableValue = +e.target.value;
		if (typeof numerableValue === 'number' && !Number.isNaN(numerableValue)) {
			setPcsBookCard(numerableValue);
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
			<div className={styles.cardDescription}>
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
							value={pcsBookCard}
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
