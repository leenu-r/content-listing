import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
        movieJsonData: []
    },
    reducers:{
        setSearchTerm: (state,action) =>{
            state.searchTerm= action.payload;
        },
        addMovieJsonObject:(state,action) =>{
            state.movieJsonData.push(action.payload);
        }
    }
});

export const {setSearchTerm,addMovieJsonObject} = searchSlice.actions;

export default searchSlice.reducer;