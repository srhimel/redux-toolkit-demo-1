const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const initialState = {
  loading: false,
  data: [],
  error: ''
}

const fetchUsers = createAsyncThunk('user/fetchUser', () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data)
})
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.data = []
      state.error = action.error.message
    })
  }
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers