import styles from "@/styles/deleteModal.module.scss"
import {Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { crudCardActions} from "@/store/crudCardSlice";

const UpdateErrorModal = ()=>{
    const dispatch=useDispatch<any>();
    return <div className={styles.container}>
           <div >
            <h1>An error occured while updating</h1>
            <span>
                <Button onClick={()=>{dispatch(crudCardActions.setUpdating(false));dispatch(crudCardActions.setUpdateError(false));}}>Cancel</Button>
            </span>
            </div> 
    </div>;
}
export default UpdateErrorModal;