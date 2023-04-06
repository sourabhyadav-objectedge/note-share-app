import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
    loading:boolean,
    error:boolean,
    notes:any
}
const initialState:InitialState={loading:false,error:false,notes:[]}
const allNotesSlice=createSlice({
    name:"allNotes",
    initialState,
    reducers:{
        setLoading(state,{payload}){
            state.loading=payload;
        },
        setError(state,{payload}){
            state.error=payload;
        },
        setNotes(state,{payload}){
            state.notes=payload
        }

    }
})

const allNotesActions=allNotesSlice.actions

export default allNotesSlice;
export {allNotesActions};