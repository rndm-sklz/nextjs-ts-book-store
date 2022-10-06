import React, { useState } from 'react';
import CartPopover from 'components/CartPopover';
import styles from 'styles/functional.module.less';
import 'antd/lib/popover/style/index.css';

export default function ShopCart() {
	const [open, setOpen] = useState(false);

	const handleOpenChange = (newOpen: boolean): void => {
		setOpen(newOpen);
	};
	return (
		<CartPopover
			open={open}
			handleOpenChange={handleOpenChange}
		>
			<div className={styles.cartBlock}>
				<span>Shopping Cart</span>
				<button type="button" className={styles.cartBtn} aria-label="cart" />
			</div>
		</CartPopover>
	);
}
