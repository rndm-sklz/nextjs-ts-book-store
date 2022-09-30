import React, { useState } from 'react';
import CartPopover from './CartPopover';
import type { Book } from '../pages/_app';
import styles from '../styles/functional.module.css';
import 'antd/lib/popover/style/index.css';

export default function ShopCart({
	setSelectedBooks,
	selectedBooks,
}: {
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[] | []>>;
	selectedBooks: Book[];
}) {
	const [open, setOpen] = useState<boolean>(false);

	const handleOpenChange = (newOpen: boolean): void => {
		setOpen(newOpen);
	};
	return (
		<CartPopover
			open={open}
			handleOpenChange={handleOpenChange}
			selectedBooks={selectedBooks}
			setSelectedBooks={setSelectedBooks}
		>
			<div className={styles.cartBlock}>
				<span>Shopping Cart</span>
				<button type="button" className={styles.cartBtn} aria-label="cart" />
			</div>
		</CartPopover>
	);
}