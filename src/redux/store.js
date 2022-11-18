import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import classSaga from "./courseSaga"
import createSagaMiddleware from "@redux-saga/core"

const sagaMiddleware = createSagaMiddleware()

sagaMiddleware.run(classSaga)
export default store
