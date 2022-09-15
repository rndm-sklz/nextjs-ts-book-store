import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Popover } from 'antd';
import cartStyles from '../styles/cartPopover.module.css';

export default function CartPopover({
	hide, open, handleOpenChange, books, children,
}) {
	return (
		<Popover
			content={
				(
					<div className={cartStyles.popoverWrapper}>
						{/* <PopoverListItems books={books}>
							<PopoverItem></PopoverItem>
						</PopoverListItems> */}
						<div className={cartStyles.popoverItems}>
							<div className={cartStyles.popoverItem}>
								qqq
							</div>
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
			{children}
		</Popover>
	);
}

CartPopover.propTypes = {
	books: PropTypes.arrayOf(PropTypes.shape(
		PropTypes.shape({
			id: PropTypes.number,
			author: PropTypes.string,
			imageLink: PropTypes.string,
			title: PropTypes.string,
			year: PropTypes.number,
			price: PropTypes.string,
		}).isRequired,
	)).isRequired,
	children: PropTypes.node.isRequired,
	open: PropTypes.bool.isRequired,
	hide: PropTypes.func.isRequired,
	handleOpenChange: PropTypes.func.isRequired,
};
