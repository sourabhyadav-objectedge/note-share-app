import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios"

const sendNote=createAsyncThunk('user/sendNote',async (data:any)=>{
    try{
        const response=await axios.post(`api/createNote`,data);
        return response.status;
    }
    
    catch(err){
        console.log(err);
        return Promise.reject();
    }
    
})
const newNoteSlice=createSlice({
    name:"newNote",
    initialState:{note:"",submitting:false,error:false,submitted:false},
    reducers:{
        setError(state,action){
            state.error=action.payload
        },
        setSubmitting(state,action){
            state.submitting=action.payload;
        },
        setNote(state,action){
            state.note=action.payload;
        },
        setSubmitted(state,action){
            state.submitted=action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(sendNote.pending,(state)=>{
            state.error=false
            state.submitting=true;
            state.submitted=false
        });
        builder.addCase(sendNote.fulfilled,(state)=>{
            state.error=false;
            state.submitting=false;
            state.note="";
            state.submitted=true;
        })
        builder.addCase(sendNote.rejected,(state,action)=>{
            state.error=true;
            state.submitted=false;
            state.submitting=false;
            console.log(action.payload);
        })

    }
})

const newNotesActions=newNoteSlice.actions

export default newNoteSlice;
export {newNotesActions,sendNote}