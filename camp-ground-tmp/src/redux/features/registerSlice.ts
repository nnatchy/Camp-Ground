import { createSlice } from '@reduxjs/toolkit';
import { RegisterUser } from '../../../interfaces';
import { PayloadAction } from '@reduxjs/toolkit';

type RegisterState = {
	registerItems: RegisterUser[]
}

const initialState: RegisterState = {
	registerItems: []
}

export const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		registerUser: (state, action:PayloadAction<RegisterUser>) => {
			state.registerItems.push(action.payload)
		},
	}
})

export const {registerUser} = registerSlice.actions
export default registerSlice.reducer