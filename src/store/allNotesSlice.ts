import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface InitialState {
    loading:boolean,
    error:boolean,
    notes:{author:string,note:string}[]|[]
}
const initialState:InitialState={loading:false,error:false,notes:[]}
const allNotesSlice=createSlice({
    name:"allNotes",
    initialState,
    reducers:{
        setLoading(state:InitialState,{payload}:PayloadAction<InitialState['loading']>){
            state.loading=payload;
        },
        setError(state:InitialState,{payload}:PayloadAction<InitialState['error']>){
            state.error=payload;
        },
        setNotes(state:InitialState,{payload}:PayloadAction<InitialState['notes']>){
            state.notes=payload
        }

    }
})

const allNotesActions=allNotesSlice.actions

export default allNotesSlice;
export {allNotesActions};