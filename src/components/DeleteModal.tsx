import { NextPage } from "next";
import styles from "@/styles/deleteModal.module.scss"
import {Button} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux'
import { crudCardActions,deleteNote} from "@/store/crudCardSlice";
import { myNotesActions } from "@/store/myNotesSlice";
    interface Props{
        note:string,
        id:string
    }
const DeleteModal:NextPage<Props> = (props)=>{
    const dispatch=useDispatch<any>();
    const myNotesLoading=useSelector((s:any)=>s.myNotes.loading);
    console.log(props.id);
    return <div className={styles.container}>
           <div >
            <h1>Are you sure you want to delete?</h1>
            <span>
                <Button variant="danger" onClick={()=>{dispatch(deleteNote(props.id));}}>Delete</Button>
                <Button onClick={()=>{dispatch(crudCardActions.setDeleting(false))}}>Cancel</Button>
            </span>
            </div> 
    </div>;
}
export default DeleteModal