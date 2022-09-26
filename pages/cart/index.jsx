import React from 'react';
import PropTypes from 'prop-types';
import CartList from '../../components/CartList';
import PageLayout from '../../components/PageLayout';

export default function Cart({ selectedBooks, setSelectedBooks }) {
	return (
		<PageLayout title="Shopping cart">
			<CartList selectedBooks={selectedBooks} setSelectedBooks={setSelectedBooks} />
		</PageLayout>
	);
}

Cart.propTypes = {
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
