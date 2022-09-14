import React from 'react';
import Link from 'next/link';
import styles from '../styles/functional.module.css';

export default function ShopCart() {
	return (
		<Link href="/cart">
			<a href="/cart">
				<div className={styles.cartBlock}>
					<span>Shopping Cart</span>
					<button type="button" className={styles.cartBtn} aria-label="cart" />
				</div>
			</a>
		</Link>
	);
}

// import React, { useState } from 'react';
// import Popover from 'antd/es/popover';
// import 'antd/dist/antd.css';
// import styles from '../styles/functional.module.css';

// export default function ShopCart() {
// 	const [open, setOpen] = useState(false);

// 	const hide = () => {
// 		setOpen(false);
// 	};

// 	const handleOpenChange = (newOpen) => {
// 		setOpen(newOpen);
// 	};
// 	return (
// 		<Popover
// 			content={<a onClick={hide}>Close</a>}
// 			title="Title"
// 			trigger="click"
// 			open={open}
// 			onOpenChange={handleOpenChange}
// 		>
// 			<button type="button" className={styles.cartBtn} aria-label="cart" />
// 		</Popover>
// 	);
// }
