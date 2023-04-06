import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
const deleteNote=createAsyncThunk('user/deleteNote',async(_id:string)=>{
    try{
        return (await axios.post('api/deleteNote',{_id})).status
    }
    catch(err){
        console.log(err);
        return Promise.reject();
    }
});
const updateNote=createAsyncThunk('user/updateNote',async(data:object)=>{
    try{
        return (await axios.post('api/updateNote',data)).status
    }
    catch(err){
        console.log(err);
        return Promise.reject();
    }
})

interface InitialState {
    deleting:boolean,
    deleteError:boolean,
    deleted:boolean,
    deleteId:string,
    updating:boolean,
    updated:boolean,
    updateError:boolean,
    updateId:string

}
const initialState:InitialState={deleting:false,deleteError:false,deleted:false,deleteId:"",updating:false,updated:false,updateError:false,updateId:""}
const crudCardSlice=createSlice({
    name:"crudCard",
    initialState,
    reducers:{
        setDeleting(state,{payload}){
            state.deleting=payload;
        },
        setDeleteError(state,{payload}){
            state.deleteError=payload;
        },
        setDeleted(state,{payload}){
            state.deleted=payload;
        },
        setUpdating(state,{payload}){
            state.updating=payload;
        },
        setUpdateError(state,{payload}){
            state.updateError=payload;
        },
        setUpdated(state,{payload}){
            state.updated=payload;
        },
        setDeleteId(state,{payload}){
            state.deleteId=payload;
        },
        setUpdateId(state,{payload}){
            state.updateId=payload;
        }
    },
    extraReducers(builder){
        builder.addCase(deleteNote.pending,(state)=>{
            
        })
        builder.addCase(deleteNote.fulfilled,(state)=>{
            state.deleting=false;
            state.deleteError=false;
            state.deleted=true;

        })
        builder.addCase(deleteNote.rejected,(state)=>{
            state.deleting=false;
            state.deleteError=true;
        })
        builder.addCase(updateNote.pending,()=>{

        })
        builder.addCase(updateNote.fulfilled,(state)=>{
            state.updating=false;
            state.updateError=false;
            state.updated=true;
            
            
        })
        builder.addCase(updateNote.rejected,(state)=>{
            state.updating=false;
            state.updateError=true;
            
        })
    }
})

const crudCardActions=crudCardSlice.actions

export default crudCardSlice;
export {crudCardActions,deleteNote,updateNote}