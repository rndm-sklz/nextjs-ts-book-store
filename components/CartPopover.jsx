import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Popover } from 'antd';
import PopoverListItems from './PopoverListItems';
import styles from '../styles/popover.module.css';

export default function CartPopover({
	hide, open, handleOpenChange, children, selectedBooks, /* setSelectedBooks, */
}) {
	return (
		<Popover
			content={
				(
					<div className={styles.popoverWrapper}>
						<PopoverListItems selectedBooks={selectedBooks} />
						<div className={styles.popoverBtns}>
							<Link href="/cart">
								<a href="/cart">
									<button type="button" className={styles.popoverBtnCart}>
										Go to Cart
									</button>
								</a>
							</Link>
						</div>
					</div>
				)
			}
			title="Your books"
			trigger="click"
			placement="bottomRight"
			open={open}
			onOpenChange={handleOpenChange}
		>
			{children}
		</Popover>
	);
}

CartPopover.propTypes = {
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
	children: PropTypes.node.isRequired,
	open: PropTypes.bool.isRequired,
	hide: PropTypes.func.isRequired,
	handleOpenChange: PropTypes.func.isRequired,
	// setSelectedBooks: PropTypes.func.isRequired,
};
