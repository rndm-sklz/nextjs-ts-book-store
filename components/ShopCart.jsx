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
