import {createSlice,createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios'
const deleteNote=createAsyncThunk<number,{_id:string,index:number},{rejectValue:number}>('user/deleteNote',async({_id,index},thunkApi)=>{
    try{
        await axios.post('api/deleteNote',{_id});
        return thunkApi.fulfillWithValue(index);
    }
    catch(err){
        console.log(err);
        return thunkApi.rejectWithValue(index);
    }
});
const updateNote=createAsyncThunk<number,{_id:string,note:string|undefined,index:number},{rejectValue:number}>('user/updateNote',async({_id,note,index},thunkApi)=>{
    try{
        await axios.post('api/1updateNote',{_id,note});
        return thunkApi.fulfillWithValue(index);

    }
    catch(err){
        console.log(err);
        return thunkApi.rejectWithValue(index);
    }
})

interface InitialState {
    deleting:boolean[]|[],
    deleteError:boolean[]|[],
    deleted:boolean,
    updating:boolean[]|[],
    updateError:boolean[]|[],
    updated:boolean,
    


}
const initialState:InitialState={deleting:[],deleteError:[],deleted:false,updating:[],updated:false,updateError:[]}
const crudCardSlice=createSlice({
    name:"crudCard",
    initialState,
    reducers:{
        setDeletingByIndex(state:InitialState,{payload}:PayloadAction<{index:number,value:boolean}>){
            state.deleting[payload.index]=payload.value;
        },
        setDeleted(state:InitialState,{payload}:PayloadAction<InitialState['deleted']>){
            state.deleted=payload;
        },
        setDeleteErrorByIndex(state:InitialState,{payload}:PayloadAction<{index:number,value:boolean}>){
            state.deleteError[payload.index]=payload.value;
        },
        setUpdatingByIndex(state:InitialState,{payload}:PayloadAction<{index:number,value:boolean}>){
            state.updating[payload.index]=payload.value;
        },
        setUpdated(state:InitialState,{payload}:PayloadAction<InitialState['updated']>){
            state.updated=payload;
        },
        setUpdateErrorByIndex(state:InitialState,{payload}:PayloadAction<{index:number,value:boolean}>){
            state.updateError[payload.index]=payload.value;
        },

        
    },
    extraReducers(builder){
        builder.addCase(deleteNote.pending,()=>{
            
        })
        builder.addCase(deleteNote.fulfilled,(state,{payload:index})=>{
            state.deleting[index]=false;
            state.deleteError[index]=false;
            state.deleted=true;
            
        })
        builder.addCase(deleteNote.rejected,(state,{payload:index})=>{
            
            if(index!==undefined){
                state.deleting[index]=false;
                state.deleteError[index]=true;
                
            }
        
        })
        builder.addCase(updateNote.pending,()=>{

        })
        builder.addCase(updateNote.fulfilled,(state,{payload:index})=>{
            state.updating[index]=false;
            state.updateError[index]=false;
            state.updated=true;
            
            
        })
        builder.addCase(updateNote.rejected,(state,{payload:index})=>{
            if(index!==undefined){
                state.updating[index]=false;
                state.updateError[index]=true;
            }
            
        })
    }
})

const crudCardActions=crudCardSlice.actions

export default crudCardSlice;
export {crudCardActions,deleteNote,updateNote}