import React from 'react';
import Link from 'next/link';
import { Popover } from 'antd';
import PopoverListItems from 'components/PopoverListItems';
import type { Book } from 'pages/types';
import styles from 'styles/popover.module.css';

export default function CartPopover({
	open,
	handleOpenChange,
	children,
	selectedBooks,
	setSelectedBooks,
}: {
	open: boolean;
	handleOpenChange: (value: boolean) => void;
	children: React.ReactNode;
	selectedBooks: Book[];
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}) {
	return (
		<Popover
			content={(
				<div className={styles.popoverWrapper}>
					<PopoverListItems
						selectedBooks={selectedBooks}
						setSelectedBooks={setSelectedBooks}
					/>
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
