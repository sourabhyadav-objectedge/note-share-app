import { NextPage } from "next";
import styles from "@/styles/deleteModal.module.scss";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { crudCardActions, deleteNote } from "@/store/crudCardSlice";
import { AppDispatch } from "@/store";
interface Props {
  index: number;
  id: string;
}
const DeleteModal: NextPage<Props> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  document.body.style.overflow = "hidden";
  function onDelete(): void {
    document.body.style.overflow = "auto";
    dispatch(deleteNote({ _id: props.id, index: props.index }));
  }
  function onCancel(): void {
    document.body.style.overflow = "auto";
    dispatch(
      crudCardActions.setDeletingByIndex({ index: props.index, value: false })
    );
  }
  // console.log(props.id);
  // console.log(document.body.scrollTop)
  return (
    <div className={styles.container} style={{ top: document.body.scrollTop }}>
      <div>
        <h1>Are you sure you want to delete?</h1>
        <span>
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </span>
      </div>
    </div>
  );
};
export default DeleteModal;
