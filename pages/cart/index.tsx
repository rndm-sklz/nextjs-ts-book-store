import React from 'react';
import CartList from 'components/CartList';
import Context from 'components/Context';
import PageLayout from 'components/PageLayout';
import type { Book } from 'pages/types';

export default function Cart({
	selectedBooks,
	setSelectedBooks,
}: {
	selectedBooks: Book[];
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}) {
	return (
		/*
		Есть несколько вариантов, как избежать ошибки ниже:
		1. Можно расширить контекст и сделать его по типу редьюсера https://reactjs.org/docs/hooks-reference.html#usereducer
		2. Можно сделать поля в типе опциональными, добавив проверку на существование типа.
		3. Лично я бы вынес в два отдельных контекста, так как они имеют разные сущности,
		но тут, конечно, по твоему желанию :)
		*/
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<Context.Provider value={{ selectedBooks, setSelectedBooks }}>
			<PageLayout title="Shopping cart">
				<CartList />
			</PageLayout>
		</Context.Provider>
	);
}
