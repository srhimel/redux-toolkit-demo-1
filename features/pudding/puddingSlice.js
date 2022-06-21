// const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
  numberOfPuddings: 20
}

const puddingSlice = createSlice({
  name: 'pudding',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfPuddings -= action.payload
    },
    restocked: (state, action) => {
      state.numberOfPuddings += action.payload
    }
  },
  // extraReducers: {
  //   ['cake/ordered']: (state) => {
  //     state.numberOfPuddings--
  //   }
  // }

  // extraReducers: (builder) => {
  //   builder.addCase(cakeActions.ordered, (state) => {
  //     state.numberOfPuddings--
  //   })
  // }
})

module.exports = puddingSlice.reducer
module.exports.puddingActions = puddingSlice.actions