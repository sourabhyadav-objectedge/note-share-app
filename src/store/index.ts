import { configureStore } from "@reduxjs/toolkit";
import newNoteSlice from "./newNoteSlice";
import myNotesSlice from "./myNotesSlice";
const store=configureStore({
    reducer:{   
        newNote:newNoteSlice.reducer,
        myNotes:myNotesSlice.reducer

    }
})
export default store;