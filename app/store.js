const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const puddingReducer = require('../features/pudding/puddingSlice')
const userReducer = require('../features/user/userSlice')

const reduxLogger = require('redux-logger')
const { getDefaultMiddleware } = require('@reduxjs/toolkit')

// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    pudding: puddingReducer,
    user: userReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})

module.exports = store