import styles from "@/styles/deleteModal.module.scss"
import {Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { crudCardActions} from "@/store/crudCardSlice";
import { AppDispatch } from "@/store";
import {FunctionComponent}  from "react";

interface Props{
    index:number
}
const DeleteErrorModal:FunctionComponent<Props>= ({index})=>{
    const dispatch=useDispatch<AppDispatch>();
    document.body.style.overflow="hidden"
    return <div className={styles.container} style={{top:document.body.scrollTop}}>
           <div >
            <h1>An error occured while deleting</h1>
            <span>
                <Button onClick={()=>{document.body.style.overflow="auto";dispatch(crudCardActions.setDeletingByIndex({value:false,index}));dispatch(crudCardActions.setDeleteErrorByIndex({value:false,index}));}}>Cancel</Button>
            </span>
            </div> 
    </div>;
}
export default DeleteErrorModal;