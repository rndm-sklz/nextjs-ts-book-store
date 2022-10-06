import React, { useEffect, useContext } from 'react';
import Image from 'next/image';
import type { Book } from 'pages/types';
import Context from 'components/Context';
import styles from 'styles/cart.module.less';

export default function CartItem({ selectedBook }: { selectedBook: Book }) {
	let { pcs } = selectedBook;
	const { setSelectedBooks } = useContext(Context);
	useEffect(() => {
		if (selectedBook.pcs <= 0) {
			setSelectedBooks((prev) => {
				const temp = prev.filter((i) => i.id !== selectedBook.id);
				localStorage.setItem('selectedBooks', JSON.stringify(temp));
				return temp;
			});
		}
	}, [selectedBook]);

	function incr() {
		if (pcs <= 99) {
			pcs += 1;
		}
		const incrPcsBook = { ...selectedBook, pcs };
		setSelectedBooks((prev) => {
			const temp = prev
				.filter((i) => i.id !== incrPcsBook.id)
				.concat([incrPcsBook])
				.sort((a, b) => a.id - b.id);
			localStorage.setItem('selectedBooks', JSON.stringify(temp));
			return temp;
		});
	}

	function decr() {
		if (pcs >= 1 && pcs <= 99) {
			pcs -= 1;
		}
		const incrPcsBook = { ...selectedBook, pcs };
		setSelectedBooks((prev) => {
			const temp = prev
				.filter((i) => i.id !== incrPcsBook.id)
				.concat([incrPcsBook])
				.sort((a, b) => a.id - b.id);
			localStorage.setItem('selectedBooks', JSON.stringify(temp));
			return temp;
		});
	}

	function userInput(e: React.ChangeEvent<HTMLInputElement>) {
		const numerableValue = +e.target.value;
		if (typeof numerableValue === 'number' && !Number.isNaN(numerableValue)) {
			const inputPcsBook = { ...selectedBook, pcs: numerableValue };
			setSelectedBooks((prev) => {
				const temp = prev
					.filter((i) => i.id !== inputPcsBook.id)
					.concat([inputPcsBook])
					.sort((a, b) => a.id - b.id);
				localStorage.setItem('selectedBooks', JSON.stringify(temp));
				return temp;
			});
		}
	}

	return selectedBook.pcs > 0 ? (
		<div className={styles.cartItemWrapper}>
			<div className={styles.cartCover}>
				<Image
					priority
					src={selectedBook.cover}
					width={30}
					height={45}
					alt={selectedBook.title}
				/>
			</div>
			<p className={styles.cartTitle}>{selectedBook.title}</p>
			<p className={styles.cartPrice}>
				${selectedBook.price * selectedBook.pcs}
			</p>
			<div className={styles.cartPcsBlock}>
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
