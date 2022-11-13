import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Context from 'components/Context';
import type { Book } from 'types/types';
import styles from 'styles/home.module.less';

export default function BookCard({
	book,
	isCardView,
}: {
	book: Book;
	isCardView: boolean,
}) {
	const { selectedBooks, setSelectedBooks } = useContext(Context);
	const [pcsBook, setPcsBook] = useState(book.pcs);

	useEffect(() => {
		const tempBook = selectedBooks.find((i) => i.id === book.id);
		if (tempBook) {
			setPcsBook(tempBook.pcs);
			localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
		}
	}, [selectedBooks, book]);

	function handlerBuyBook() {
		if (pcsBook >= 0) {
			const cloneBooks = { ...book, pcs: pcsBook };
			setSelectedBooks((prev) => {
				const temp = prev
					.filter((selectedBook) => selectedBook.id !== cloneBooks.id)
					.concat([cloneBooks]);
				localStorage.setItem('selectedBooks', JSON.stringify(temp));
				return temp;
			});
		}
		if (pcsBook === 0) {
			setSelectedBooks((prev) => {
				const temp = prev
					.filter((selectedBook) => selectedBook.id !== book.id);
				localStorage.setItem('selectedBooks', JSON.stringify(temp));
				return temp;
			});
		}
	}

	function decr() {
		if (pcsBook >= 1) {
			setPcsBook((prev) => prev - 1);
		}
	}

	function incr() {
		if (pcsBook >= 0 && pcsBook <= 98) {
			setPcsBook((prev) => prev + 1);
		}
	}

	function userInput(e: React.ChangeEvent<HTMLInputElement>) {
		const numerableValue = +e.target.value;
		if (typeof numerableValue === 'number' && !Number.isNaN(numerableValue)) {
			setPcsBook(numerableValue);
		}
	}

	return isCardView ? (
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
							value={pcsBook}
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
	) : (
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
			<div className={styles.lineDescription}>
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
						value={pcsBook}
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
