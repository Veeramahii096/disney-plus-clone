
import {createSlice} from "@reduxjs/toolkit"

const initialState={
   // movies:[],
   recommend:null,
   newDisney:null,
   original:null,
   trending:null,
}
const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.recommend=action.payload.recommend;
            state.newDisney=action.payload.newDisney;
            state.trending=action.payload.trending;
            state.original=action.payload.original;
        }
    }
})

export const  {setMovies}=movieSlice.actions;
export const selectMovies=(state)=>state.movie.recommend;
export const selectNew=(state)=>state.movie.newDisney;
export const selectTrending=(state)=>state.movie.trending;
export const selectOriginal=(state)=>state.movie.original;
export default movieSlice.reducer;
