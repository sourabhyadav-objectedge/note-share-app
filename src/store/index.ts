import { configureStore } from "@reduxjs/toolkit";
import newNoteSlice from "./newNoteSlice";
import myNotesSlice from "./myNotesSlice";
import allNotesSlice from "./allNotesSlice";
import crudCardSlice from "./crudCardSlice";
const store=configureStore({
    reducer:{   
        newNote:newNoteSlice.reducer,
        myNotes:myNotesSlice.reducer,
        allNotes:allNotesSlice.reducer,
        crudCard:crudCardSlice.reducer

    }
})
export type ReduxStateType=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
export default store;