import { createSlice } from "@reduxjs/toolkit"
export const courseSlice = createSlice({
	name: "courses",
	initialState: {
		courses: [],
		isLoading: false
	},
	reducers: {
		getCoursesFetch: (state) => {
			state.isLoading = true
		},
		getCoursesSuccess: (state, action) => {
			state.courses = action.payload
			state.isLoading = false
		},
		getCoursesFailure: (state) => {
			state.isLoading = false
		}
	}
})
export const { getCoursesFetch, getCoursesSuccess, getCoursesFailure } = courseSlice.actions
export default courseSlice.reducer
