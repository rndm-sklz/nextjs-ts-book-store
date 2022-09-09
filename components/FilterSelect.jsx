import React from 'react';

export default function FiterSelect() {
	return (
		<form>
			<label htmlFor="filter">Filter</label>
			<select name="filter" id="filter">
				<option value="">Filter by</option>
				<option value="author">author</option>
				<option value="genre">genre</option>
				<option value="year">year</option>
			</select>
		</form>
	);
}
