import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

import { Provider } from "react-redux"
import createSagaMiddleware from "@redux-saga/core"
import { configureStore } from "@reduxjs/toolkit"
import courseReducer from "./redux/courseState"
import courseSaga from "./redux/courseSaga"

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
	reducer: {
		courses: courseReducer
	},
	middleware: [sagaMiddleware]
})
sagaMiddleware.run(courseSaga)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
