import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/home.module.css';
import PageLayout from '../components/PageLayout';
import FilterSelect from '../components/FilterSelect';
import SortSelect from '../components/SortSelect';
import ToggleView from '../components/ToggleView';
import BooksList from '../components/BooksList';
import ShopCart from '../components/ShopCart';
import Context from '../components/context/context';

export default function Home({ books }) {
	const [isCardView, setIsCardView] = useState(true);
	// const [countPcs, setCountPcs] = useState(5);
	const [selectedBooks, setSelectedBooks] = useState([
		{ id: 1 },
		{ id: 4 },
		{ id: 5 },
	]);
	console.log(selectedBooks);

	function buyBook(book) {
		// eslint-disable-next-line max-len
		const addSelectedBooks = selectedBooks
			.filter((selectedBook) => selectedBook.id !== book.id)
			.concat([{ book }]);

		// console.log(addSelectedBooks);

		setSelectedBooks(addSelectedBooks);
		// console.log(selectedBooks);
		// console.log(selectedBooks);
	}
	return (
		<Context.Provider value={{}}>
			<PageLayout title="Home">
				<div className={styles.filtersWrapper}>
					<FilterSelect />
					<SortSelect />
					<ToggleView setView={setIsCardView} isCardView={isCardView} />
					<ShopCart />
				</div>
				<div className={styles.booksWrapper}>
					<BooksList books={books} isCardView={isCardView} addBook={buyBook} />
				</div>
			</PageLayout>
		</Context.Provider>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(
		'https://my-json-server.typicode.com/rndm-sklz/book-store-db/books',
	);
	const books = await res.json();
	return {
		props: {
			books,
		},
	};
};

Home.propTypes = {
	books: PropTypes.arrayOf(
		PropTypes.shape(
			PropTypes.shape({
				id: PropTypes.number,
				author: PropTypes.string,
				imageLink: PropTypes.string,
				title: PropTypes.string,
				year: PropTypes.number,
				price: PropTypes.string,
			}).isRequired,
		),
	).isRequired,
};
