import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/home.module.css';
import PageLayout from '../components/PageLayout';
import FilterSelect from '../components/FilterSelect';
import SortSelect from '../components/SortSelect';
import ToggleView from '../components/ToggleView';
import BooksList from '../components/BooksList';
import ShopCart from '../components/ShopCart';

export default function Home({ books, setSelectedBooks, selectedBooks }) {
	const [isCardView, setIsCardView] = useState(true);
	const [booksClient, setBooksClient] = useState(books);
	const authors = booksClient.map((i) => i.author);
	const genre = booksClient.map((i) => i.genre);
	return (
		<PageLayout title="Home">
			<div className={styles.filtersWrapper}>
				<FilterSelect
					booksClient={booksClient}
					setBooksClient={setBooksClient}
					authors={authors}
					genre={genre}
					books={books}
				/>
				<SortSelect
					booksClient={booksClient}
					setBooksClient={setBooksClient}
					authors={authors}
					genre={genre}
					books={books}
				/>
				<ToggleView setView={setIsCardView} isCardView={isCardView} />
				<ShopCart
					selectedBooks={selectedBooks}
					setSelectedBooks={setSelectedBooks}
				/>
			</div>
			<div className={styles.booksWrapper}>
				<BooksList
					booksClient={booksClient}
					isCardView={isCardView}
					setSelectedBooks={setSelectedBooks}
					selectedBooks={selectedBooks}
				/>
			</div>
		</PageLayout>
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
