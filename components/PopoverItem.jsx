import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/popover.module.css';

export default function PopoverItem({ selectedBook/* , setSelectedBooks */ }) {
	const [pcsCart, setPcsCart] = useState(selectedBook.pcs);
	// console.log(pcsCart);

	function decr() {
		// eslint-disable-next-line max-len
		setPcsCart((prev) => (prev >= 1 && prev <= 99 ? +prev - 1 : prev));
	}

	function incr() {
		// eslint-disable-next-line max-len
		setPcsCart((prev) => (prev >= 0 && prev <= 98 ? +prev + 1 : prev));
	}

	function userInput(e) {
		const numerableValue = +e.target.value;
		if (typeof numerableValue === 'number' && !Number.isNaN(numerableValue)) {
			setPcsCart(numerableValue);
		} else {
			setPcsCart((prev) => prev);
		}
	}

	return (
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
			<p className={styles.popoverPrice}><nobr>${selectedBook.price}</nobr></p>
			<div className={styles.popoverPcsBlock}>
				<button type="button" onClick={decr}>-</button>
				<input
					type="text"
					minLength={1}
					maxLength={2}
					required
					value={+pcsCart}
					onChange={userInput}
					// placeholder="0"
				/>
				<button type="button" onClick={incr}>+</button>
				<span>pcs</span>
			</div>
		</div>
	);
}

PopoverItem.propTypes = {
	selectedBook: PropTypes.shape({
		title: PropTypes.string,
		id: PropTypes.number,
		pcs: PropTypes.number,
		price: PropTypes.number,
		cover: PropTypes.string,
	}).isRequired,
	// setSelectedBooks: PropTypes.func.isRequired,
};
