import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/home.module.css';
import PageLayout from '../components/PageLayout';
import FilterSelect from '../components/FilterSelect';
import SortSelect from '../components/SortSelect';
import ToggleView from '../components/ToggleView';
import BooksList from '../components/BooksList';
import ShopCart from '../components/ShopCart';

function Home({ books }) {
	return (
		<PageLayout title="Home">
			<div className={styles.filtersWrapper}>
				<FilterSelect />
				<SortSelect />
				<ToggleView />
				<ShopCart />
			</div>
			<div className={styles.booksWrapper}>
				<BooksList books={books} />
			</div>
		</PageLayout>
	);
}

export const getStaticProps = async () => {
	const res = await fetch('https://my-json-server.typicode.com/rndm-sklz/book-store-db/books');
	const books = await res.json();
	return {
		props: {
			books,
		},
	};
};

Home.propTypes = {
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
};

export default Home;
