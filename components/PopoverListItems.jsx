import React from 'react';
import PropTypes from 'prop-types';
import PopoverItem from './PopoverItem';
import styles from '../styles/popover.module.css';

export default function PopoverListItem({ setSelectedBooks, selectedBooks }) {
	return (
		<div className={styles.popoverList}>
			{selectedBooks.map((selectedBook) => (
				<PopoverItem key={selectedBook.id} selectedBook={selectedBook} />
			))}
		</div>
	);
}
PopoverListItem.propTypes = {
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
	// setSelectedBooks: PropTypes.func.isRequired,
};
