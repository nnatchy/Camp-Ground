import { createSlice } from '@reduxjs/toolkit';
import { BookingItem } from '../../../interfaces';
import { PayloadAction } from '@reduxjs/toolkit';

type BookState = {
	bookItems: BookingItem[]
}

const initialState: BookState = {
	bookItems: []
}

export const bookSlice = createSlice({
	name: 'book',
	initialState,
	reducers: {
		addBooking: (state, action:PayloadAction<BookingItem>) => {
			state.bookItems.push(action.payload)
		},
		removeBooking: (state, action:PayloadAction<BookingItem>) => {
			const remainItems = state.bookItems.filter(elem => {
				return elem.cid !== action.payload.cid
			})
			state.bookItems = remainItems
		}
	}
})

export const {addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer