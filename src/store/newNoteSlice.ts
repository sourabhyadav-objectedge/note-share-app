import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const sendNote = createAsyncThunk(
  "user/sendNote",
  async (
    data: { author: string | null | undefined; note: string },
    thunkApi
  ) => {
    try {
      const response = await axios.post(`api/createNote`, data);
      return thunkApi.fulfillWithValue(response.status);
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(-1);
    }
  }
);
interface InitialState {
  note: string;
  submitting: boolean;
  error: boolean;
  submitted: boolean;
}
const newNoteSlice = createSlice({
  name: "newNote",
  initialState: { note: "", submitting: false, error: false, submitted: false },
  reducers: {
    setError(
      state: InitialState,
      action: PayloadAction<InitialState["error"]>
    ) {
      state.error = action.payload;
    },
    setSubmitting(
      state: InitialState,
      action: PayloadAction<InitialState["submitting"]>
    ) {
      state.submitting = action.payload;
    },
    setNote(state: InitialState, action: PayloadAction<InitialState["note"]>) {
      state.note = action.payload;
    },
    setSubmitted(
      state: InitialState,
      action: PayloadAction<InitialState["submitted"]>
    ) {
      state.submitted = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(sendNote.pending, (state) => {
      state.error = false;
      state.submitting = true;
      state.submitted = false;
    });
    builder.addCase(sendNote.fulfilled, (state) => {
      state.error = false;
      state.submitting = false;
      state.note = "";
      state.submitted = true;
    });
    builder.addCase(sendNote.rejected, (state, action) => {
      state.error = true;
      state.submitted = false;
      state.submitting = false;
      console.log(action.payload);
    });
  },
});

const newNotesActions = newNoteSlice.actions;

export default newNoteSlice;
export { newNotesActions, sendNote };
