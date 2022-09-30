import React, { useEffect } from 'react';
import Image from 'next/image';
import type { Book } from '../pages/_app';
import styles from '../styles/popover.module.css';

export default function PopoverItem({
	selectedBook,
	selectedBooks,
	setSelectedBooks,
}: {
	selectedBook: Book;
	selectedBooks: Book[];
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[] | []>>;
}) {
	let { pcs }: {pcs: number} = selectedBook;

	useEffect((): void => {
		if (selectedBook.pcs <= 0) {
			setSelectedBooks((prev) => prev.filter((i) => i.id !== selectedBook.id));
		}
	}, [selectedBooks, selectedBook]);

	function incr() {
		if (pcs <= 99) {
			pcs += 1;
		}
		const incrPcsBook = { ...selectedBook, pcs };
		setSelectedBooks((prev) => prev
			.filter((i) => i.id !== incrPcsBook.id)
			.concat([incrPcsBook])
			.sort((a, b) => a.id - b.id));
	}

	function decr() {
		if (pcs >= 1 && pcs <= 99) {
			pcs -= 1;
		}
		const incrPcsBook = { ...selectedBook, pcs };
		setSelectedBooks((prev) => prev
			.filter((i) => i.id !== incrPcsBook.id)
			.concat([incrPcsBook])
			.sort((a, b) => a.id - b.id));
	}

	function userInput(e: React.ChangeEvent<HTMLInputElement>) {
		const numerableValue = +e.target.value;
		if (typeof numerableValue === 'number' && !Number.isNaN(numerableValue)) {
			const inputPcsBook = { ...selectedBook, pcs: numerableValue };
			setSelectedBooks((prev) => prev
				.filter((i) => i.id !== inputPcsBook.id)
				.concat([inputPcsBook])
				.sort((a, b) => a.id - b.id));
		} else {
			setSelectedBooks((prev) => prev);
		}
	}

	return selectedBook.pcs > 0 ? (
		<div className={styles.popoverItemWrappper}>
			<div className={styles.popoverCover}>
				<Image
					priority
					src={selectedBook.cover}
					width={30}
					height={45}
					alt={selectedBook.title}
				/>
			</div>
			<p className={styles.popoverTitle}>{selectedBook.title}</p>
			<p className={styles.popoverPrice}>${selectedBook.price * selectedBook.pcs}</p>
			<div className={styles.popoverPcsBlock}>
				<button type="button" onClick={decr}>
					-
				</button>
				<input
					type="text"
					minLength={1}
					maxLength={2}
					required
					value={selectedBook.pcs}
					onChange={userInput}
				/>
				<button type="button" onClick={incr}>
					+
				</button>
				<span>pcs</span>
			</div>
		</div>
	) : null;
}
