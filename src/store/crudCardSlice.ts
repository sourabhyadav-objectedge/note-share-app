import {createSlice,createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
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
const updateNote=createAsyncThunk('user/updateNote',async(data:{_id:string,note:string|undefined})=>{
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
        setDeleting(state:InitialState,{payload}:PayloadAction<InitialState['deleting']>){
            state.deleting=payload;
        },
        setDeleteError(state:InitialState,{payload}:PayloadAction<InitialState['deleteError']>){
            state.deleteError=payload;
        },
        setDeleted(state:InitialState,{payload}:PayloadAction<InitialState['deleted']>){
            state.deleted=payload;
        },
        setUpdating(state:InitialState,{payload}:PayloadAction<InitialState['updating']>){
            state.updating=payload;
        },
        setUpdateError(state:InitialState,{payload}:PayloadAction<InitialState['updateError']>){
            state.updateError=payload;
        },
        setUpdated(state:InitialState,{payload}:PayloadAction<InitialState['updated']>){
            state.updated=payload;
        },
        setDeleteId(state:InitialState,{payload}:PayloadAction<InitialState['deleteId']>){
            state.deleteId=payload;
        },
        setUpdateId(state:InitialState,{payload}:PayloadAction<InitialState['updateId']>){
            state.updateId=payload;
        }
    },
    extraReducers(builder){
        builder.addCase(deleteNote.pending,()=>{
            
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