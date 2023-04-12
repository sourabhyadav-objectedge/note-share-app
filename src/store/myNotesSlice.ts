import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const fetchMyNotes = createAsyncThunk(
  "user/fetchMyNotes",
  async (data: { author: string | null | undefined }, thunkApi) => {
    try {
      const response = await axios.post(`api/myNotes`, data);
      return thunkApi.fulfillWithValue(response.data);
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(-1);
    }
  }
);
interface InitialState {
  loading: boolean;
  error: boolean;
  notes: any;
}
const initialState: InitialState = { loading: false, error: false, notes: [] };
const myNotesSlice = createSlice({
  name: "myNotes",
  initialState,
  reducers: {
    setLoading(
      state: InitialState,
      { payload }: PayloadAction<InitialState["loading"]>
    ) {
      state.loading = payload;
    },
    setError(
      state: InitialState,
      { payload }: PayloadAction<InitialState["error"]>
    ) {
      state.error = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMyNotes.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchMyNotes.fulfilled, (state, { payload }) => {
      state.error = false;
      state.loading = false;
      state.notes = payload;
    });
    builder.addCase(fetchMyNotes.rejected, (state, action) => {
      state.error = true;
      console.log(action.payload);
    });
  },
});

const myNotesActions = myNotesSlice.actions;

export default myNotesSlice;
export { myNotesActions, fetchMyNotes };
