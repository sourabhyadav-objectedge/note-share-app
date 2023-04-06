import styles from "@/styles/deleteModal.module.scss"
import {Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { crudCardActions} from "@/store/crudCardSlice";

const DeleteErrorModal = ()=>{
    const dispatch=useDispatch<any>();
    return <div className={styles.container}>
           <div >
            <h1>An error occured while deleting</h1>
            <span>
                <Button onClick={()=>{dispatch(crudCardActions.setDeleting(false));dispatch(crudCardActions.setDeleteError(false));}}>Cancel</Button>
            </span>
            </div> 
    </div>;
}
export default DeleteErrorModal;