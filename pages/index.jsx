import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Home.module.css';
import PageLayout from '../components/PageLayout';

function Home({ books }) {
	return (
		<PageLayout title="Home">
			<div className={styles.grid}>
				{books.map((book) => (
					<div key={book.id} className={styles.card}>
						<h3>{book.title}</h3>
						<p>{book.author}</p>
						<p>$ {book.price}</p>
						<p>
							<button type="button">Buy</button>
						</p>
					</div>
				))}
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
	book: PropTypes.shape({
		id: PropTypes.number,
		author: PropTypes.string,
		imageLink: PropTypes.string,
		title: PropTypes.string,
		year: PropTypes.number,
		price: PropTypes.string,
	}).isRequired,
};

export default Home;
