import React, { useState } from 'react';
import Image from 'next/image';
import Loader from 'components/Loader';
import type { Book } from 'pages/types';
import styles from 'styles/cart.module.less';

export default function CartTotalPrice({
	selectedBooks,
}: {
	selectedBooks: Book[];
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoad, setLoad] = useState(false);
	const sumPrice = selectedBooks.reduce((sum, el) => sum + el.price * el.pcs, 0);

	function loadOpen() {
		setLoad(true);
		setTimeout(() => {
			setLoad(false);
			setIsOpen(true);
		}, 3000);
	}

	return (
		<div className={styles.totalPrice}>
			<p className={styles.totalPriceTitle}>Total price:</p>
			<p className={styles.totalPriceNum}>${sumPrice}</p>
			<button
				type="button"
				className={styles.payBtn}
				onClick={loadOpen}
			>
				Pay
			</button>
			{isLoad && <Loader />}
			{isOpen && (
				<div className={styles.payModalBgr}>
					<div className={styles.payModalWindow}>
						<p>Payment successfully completed!</p>
						<div className={styles.logoModalWindow}>
							<Image
								priority
								src="/img/cash.png"
								layout="fill"
								alt="Pay logo"
							/>
						</div>
						<button type="button" onClick={() => setIsOpen(false)}>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
