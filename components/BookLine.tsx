import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Context from 'components/Context';
import type { Book } from 'pages/types';
import styles from 'styles/home.module.less';

/*
	Компонент очень схож с BookCard, можно вынести общую логику отдельно, чтобы избежать
	дублирование кода и рендерить, к примеру, в зависимости от флага isCard, который будет
	определять вид компонента
*/
export default function BookLine({
	book,
}: {
	book: Book;
}) {
	const { selectedBooks, setSelectedBooks } = useContext(Context);
	const [pcsBookLine, setPcsBookLine] = useState(book.pcs);

	useEffect(() => {
		const tempBook = selectedBooks.find((i) => i.id === book.id && i.pcs !== 0);
		if (tempBook) {
			setPcsBookLine(tempBook.pcs);
			localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
		}
	}, [selectedBooks, book]);

	function handlerBuyBook() {
		if (pcsBookLine >= 0) {
			const cloneBooks = { ...book, pcs: pcsBookLine };
			setSelectedBooks((prev) => {
				const temp = prev
					.filter((selectedBook) => selectedBook.id !== cloneBooks.id)
					.concat([cloneBooks]);
				localStorage.setItem('selectedBooks', JSON.stringify(temp));
				return temp;
			});
		}
		if (pcsBookLine === 0) {
			setSelectedBooks((prev) => {
				const temp = prev
					.filter((selectedBook) => selectedBook.id !== book.id);
				localStorage.setItem('selectedBooks', JSON.stringify(temp));
				return temp;
			});
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
