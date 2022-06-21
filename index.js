const store = require('./app/store')
const { fetchUsers } = require('./features/user/userSlice')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const puddingActions = require('./features/pudding/puddingSlice').puddingActions

console.log('initial State', store.getState())
const unsubscribe = store.subscribe(() => { console.log('updated State', store.getState()) })

// store.dispatch(puddingActions.ordered(1))
// store.dispatch(cakeActions.ordered(1))
// store.dispatch(cakeActions.restocked(1))
// store.dispatch(puddingActions.restocked(1))

store.dispatch(fetchUsers())

