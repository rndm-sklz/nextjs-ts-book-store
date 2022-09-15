/* import React from 'react';
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
} */

/* import React, { useState } from 'react';
import Link from 'next/link';
import { Popover } from 'antd';
import styles from '../styles/functional.module.css';
import cartStyles from '../styles/cartPopover.module.css';
// import 'antd/dist/antd.css';
import 'antd/lib/popover/style/index.css';

export default function ShopCart() {
	const [open, setOpen] = useState(false);

	const hide = () => {
		setOpen(false);
	};

	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};
	return (
		<Popover
			content={
				(
					<div className={cartStyles.cartWrapper}>
						<div>
							lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
						</div>
						<Link href="/cart">
							<a href="/cart">
								<button type="button">
									Go to Cart
								</button>
							</a>
						</Link>
						<button type="button" onClick={hide}>
							Close
						</button>
					</div>
				)
			}
			title="Your books"
			trigger="click"
			placement="bottomRight"
			open={open}
			onOpenChange={handleOpenChange}
		>
			<div className={styles.cartBlock}>
				<span>Shopping Cart</span>
				<button type="button" className={styles.cartBtn} aria-label="cart" />
			</div>
		</Popover>
	);
} */

import React, { useState } from 'react';
import CartPopover from './CartPopover';
import styles from '../styles/functional.module.css';
// import 'antd/dist/antd.css';
import 'antd/lib/popover/style/index.css';

export default function ShopCart() {
	const [open, setOpen] = useState(false);

	const hide = () => {
		setOpen(false);
	};

	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};
	return (
		<CartPopover hide={hide} open={open} handleOpenChange={handleOpenChange}>
			<div className={styles.cartBlock}>
				<span>Shopping Cart</span>
				<button type="button" className={styles.cartBtn} aria-label="cart" />
			</div>
		</CartPopover>
	);
}
