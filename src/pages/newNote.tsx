import { useSession } from "next-auth/react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { newNotesActions as actions, sendNote } from "@/store/newNoteSlice";
import { ReduxStateType, AppDispatch } from "@/store";
import React from "react";
export default function NewNote() {
  const state = useSelector((s: ReduxStateType) => s.newNote);
  const dispatch = useDispatch<AppDispatch>();
  const { data: session, status } = useSession();

  async function createNewNote(
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    event.preventDefault();
    await dispatch(sendNote({ author: session?.user?.name, note: state.note }));
  }

  function createNote(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    dispatch(actions.setNote(event.target.value));
  }

  if (status === "loading")
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  if (status === "authenticated")
    return (
      <>
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
          Create your note
        </h2>
        <hr style={{ marginBottom: "2rem" }} />
        <Form
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Form.Label>Your Note</Form.Label>
          <Form.Control
            as="textarea"
            style={{ width: "80%", fontSize: "1.5rem" }}
            rows={6}
            value={state.note}
            onChange={createNote}
          />
          <Button
            type="submit"
            style={{ height: "4rem", fontSize: "1.5rem" }}
            onClick={createNewNote}
          >
            Create new note
          </Button>
        </Form>
        {state.submitting && (
          <h2 style={{ textAlign: "center" }}>Submitting...</h2>
        )}
        {state.error && (
          <h2 style={{ textAlign: "center" }}>An error occured</h2>
        )}
        {state.submitted && <h2 style={{ textAlign: "center" }}>Submitted.</h2>}
      </>
    );
  else
    return (
      <h2 style={{ textAlign: "center" }}>
        You need to be logged in to create your own notes
      </h2>
    );
}
