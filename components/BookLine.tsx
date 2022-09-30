import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import type { Book } from '../pages/_app';
import styles from '../styles/home.module.css';

export default function BookLine({
	book,
	selectedBooks,
	setSelectedBooks,
}: {
	book: Book;
	selectedBooks: Book[];
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[] | []>>;
}) {
	const [pcsBookLine, setPcsBookLine] = useState<number>(book.pcs);

	useEffect((): void => {
		const tempBook = selectedBooks.find((i) => i.id === book.id && i.pcs !== 0);
		if (tempBook) {
			setPcsBookLine(tempBook.pcs);
			localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
		}
	}, [selectedBooks, book]);

	function handlerBuyBook() {
		if (pcsBookLine >= 0) {
			const cloneBooks = { ...book, pcs: pcsBookLine };
			const buyBooks = selectedBooks
				.filter((selectedBook) => selectedBook.id !== cloneBooks.id)
				.concat([cloneBooks]);
			setSelectedBooks(buyBooks);
			localStorage.setItem('selectedBooks', JSON.stringify(buyBooks));
		}
		if (pcsBookLine === 0) {
			const cloneBooks = selectedBooks.filter(
				(selectedBook) => selectedBook.id !== book.id,
			);
			setSelectedBooks(cloneBooks);
			localStorage.setItem('selectedBooks', JSON.stringify(cloneBooks));
		}
	}

	function decr() {
		setPcsBookLine((prevPcsBookLine) => (prevPcsBookLine >= 1 && prevPcsBookLine <= 99
			? +prevPcsBookLine - 1
			: prevPcsBookLine
		));
	}

	function incr() {
		setPcsBookLine((prevPcsBookLine) => (prevPcsBookLine >= 0 && prevPcsBookLine <= 98
			? +prevPcsBookLine + 1
			: prevPcsBookLine
		));
	}

	function userInput(e: React.ChangeEvent<HTMLInputElement>) {
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
				<p className={styles.linePrice}>${book.price}</p>
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
