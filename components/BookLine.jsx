import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/home.module.css';

export default function BookLine({ book }) {
	return (
		<div className={styles.lineItem}>
			<Image
				priority
				src={book.cover}
				width={30}
				height={45}
				alt={book.title}
			/>
			<div className={styles.lineDecription}>
				<h3 className={styles.lineTitle}>{book.title}</h3>
				<p className={styles.lineAuthor}>{book.author}</p>
				<p className={styles.lineGenre}>{book.genre}</p>
				<p className={styles.linePrice}>$ {book.price}</p>
				<div className={styles.linePcsBlock}>
					<span>Quantity:</span>
					<button type="button">-</button>
					<input type="number" />
					<button type="button">+</button>
					<span>pcs</span>
				</div>
				<button type="button" className={styles.lineBuyBtn}>Buy</button>
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
