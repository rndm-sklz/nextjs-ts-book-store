import React from 'react';
import Link from 'next/link';
import { Popover } from 'antd';
import PopoverListItems from 'components/PopoverListItems';
import styles from 'styles/popover.module.less';

export default function CartPopover({
	open,
	handleOpenChange,
	children,
}: {
	open: boolean;
	handleOpenChange: (value: boolean) => void;
	children: React.ReactNode;
}) {
	return (
		<Popover
			content={(
				<div className={styles.popoverWrapper}>
					<PopoverListItems />
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
			)}
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
