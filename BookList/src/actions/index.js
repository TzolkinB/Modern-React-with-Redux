export function selectBook(book) {
		// selectBook is an action creator and needs to return an action,
		// which is an object with a type property. Type describes purpose of the action.
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}