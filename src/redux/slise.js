import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'posts',
    initialState: {
        account: {
            token: '',
        },
        posts: [],
        isLoading: false,
    },
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setToken(state, action) {
            state.account.token = action.payload;
        },
    },
});

export default slice.reducer;
export const { setPosts, setLoading, setToken } = slice.actions;