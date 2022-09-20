import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartPopover from './CartPopover';
import styles from '../styles/functional.module.css';
// import 'antd/dist/antd.css';
import 'antd/lib/popover/style/index.css';

export default function ShopCart({ setSelectedBooks, selectedBooks }) {
	const [open, setOpen] = useState(false);

	const hide = () => {
		setOpen(false);
	};

	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};
	return (
		<CartPopover
			hide={hide}
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
ShopCart.propTypes = {
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
	setSelectedBooks: PropTypes.func.isRequired,
};
