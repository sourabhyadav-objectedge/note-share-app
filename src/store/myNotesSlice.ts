import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios"

const fetchMyNotes=createAsyncThunk('user/fetchMyNotes',async (data:any)=>{
    try{
        const response=await axios.post(`api/myNotes`,data);
        return response.data;
    }
    
    catch(err){
        console.log(err);
        return Promise.reject(err);
    }
    
})
interface InitialState {
    loading:boolean,
    error:boolean,
    notes:any

}
const initialState:InitialState={loading:false,error:false,notes:[]}
const myNotesSlice=createSlice({
    name:"myNotes",
    initialState,
    reducers:{
        setLoading(state,{payload}){
            state.loading=payload;
        },
        setError(state,{payload}){
            state.error=payload;
        } 
    },
    extraReducers(builder){
        builder.addCase(fetchMyNotes.pending,(state)=>{
            state.loading=true;
            state.error=false;
        });
        builder.addCase(fetchMyNotes.fulfilled,(state,{payload})=>{
            state.error=false;
            state.loading=false;
            state.notes=payload;
        })
        builder.addCase(fetchMyNotes.rejected,(state,action)=>{
            state.error=true;
            console.log(action.payload);
        })

    }
})

const myNotesActions=myNotesSlice.actions

export default myNotesSlice;
export {myNotesActions,fetchMyNotes}