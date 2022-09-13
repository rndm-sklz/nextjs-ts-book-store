import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

export default function PageLayout({ children, title }) {
	return (
		<>
			<Head>
				<title>
					PEPEBOOKS |
					{title}
				</title>
				<meta name="keywords" content="books,books store" />
				<meta name="description" content="this is books store PEPEBOOKS" />
				<meta charSet="utf-8" />
			</Head>
			<header className={styles.header}>
				<div className={styles.logo}>
					<Link href="/">
						<a href="/#">
							<Image
								priority
								src="/img/logo-pepe.png"
								height={39}
								width={40}
								alt="Pepe portrait"
							/>
						</a>
					</Link>
				</div>
				<div className={styles.title}>
					<p>books</p>
					<h1>PEPEBOOKS</h1>
					<p>store</p>
				</div>
				<div className={styles.empty} />
			</header>
			<main>{children}</main>
			<footer className={styles.footer}>
				<a href="https://github.com/rndm-sklz/nextjs-book-store" aria-label="github link" className={styles.githubLink}><img src="/img/github-logo.svg" alt="GitHub logo" width={32} height={32} /></a>
				<h2>ⓒ kinoplan.tech</h2>
				<div className={styles.year}>2022</div>
			</footer>
		</>
	);
}

PageLayout.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
};
