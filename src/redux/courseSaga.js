import { call, put, takeEvery } from "redux-saga/effects"
import { getCoursesSuccess } from "./courseState"

function* workGetCoursesFetch() {
	const courses = yield fetch("http://localhost:3000/courses")
	const formattedCourses = yield courses.json()
	yield put(getCoursesSuccess(formattedCourses))
}
function* courseSaga() {
	yield takeEvery("courses/getCoursesFetch", workGetCoursesFetch)
}

export default courseSaga
