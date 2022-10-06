export type Book = {
	id: number,
	genre: string,
	author: string,
	cover: string,
	title: string,
	year: number,
	price: number,
	pcs: number
}
export interface IContext {
	selectedBooks: Book[],
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[]>>,
	booksClient: Book[];
	setBooksClient: React.Dispatch<React.SetStateAction<Book[]>>,
}
