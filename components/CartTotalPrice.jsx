import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/cart.module.css';

export default function CartTotalPrice({ selectedBooks }) {
	const [totalPrice, setTotalPrice] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		const sumPrice = selectedBooks.reduce((sum, el) => sum + el.price * el.pcs, 0);
		setTotalPrice(sumPrice);
	}, [selectedBooks, totalPrice]);
	return (
		<div className={styles.totalPrice}>
			<p className={styles.totalPriceTitle}>Total price:</p>
			<p className={styles.totalPriceNum}><nobr>${totalPrice}</nobr></p>
			<button type="button" className={styles.payBtn} onClick={() => setIsOpen(true)}>Pay</button>
			{isOpen && (
				<div className={styles.payModalBgr}>
					<div className={styles.payModalWindow}>
						<p>Payment successfully completed!</p>
						<div className={styles.logoModalWindow}>
							<Image
								priority
								responsive="true"
								src="/img/cash.png"
								layout="fill"
								alt="Pay logo"
							/>
						</div>
						<button type="button" onClick={() => setIsOpen(false)}>Close</button>
					</div>
				</div>
			)}
		</div>
	);
}
CartTotalPrice.propTypes = {
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
};
