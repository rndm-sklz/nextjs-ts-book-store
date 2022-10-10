import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Loader from 'components/Loader';
import Context from 'components/Context';
import styles from 'styles/cart.module.less';

export default function CartTotalPrice() {
	const {
		selectedBooks,
	} = React.useContext(Context);
	const [isOpen, setIsOpen] = useState(false);
	const [isLoad, setLoad] = useState(false);
	const sumPrice = useMemo(() => selectedBooks
		.reduce((sum, el) => sum + el.price * el.pcs, 0), [selectedBooks]);

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
