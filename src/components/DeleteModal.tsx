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
    document.body.style.overflow="hidden"
    // console.log(props.id);
    console.log(document.body.scrollTop)
    return <div className={styles.container} style={{top:document.body.scrollTop}}>
           <div >
            <h1>Are you sure you want to delete?</h1>
            <span>
                <Button variant="danger" onClick={()=>{document.body.style.overflow="auto";dispatch(deleteNote(props.id));}}>Delete</Button>
                <Button onClick={()=>{document.body.style.overflow="auto";dispatch(crudCardActions.setDeleting(false));}}>Cancel</Button>
            </span>
            </div> 
    </div>;
}
export default DeleteModal