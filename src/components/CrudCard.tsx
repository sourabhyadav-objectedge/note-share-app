import { NextPage } from "next";
import {Card,Button} from 'react-bootstrap'
import { crudCardActions } from "@/store/crudCardSlice";
import {useDispatch,useSelector} from 'react-redux'
import DeleteModal from "./DeleteModal";
import DeleteErrorModal from "./DeleteErrorModal";
import UpdateModal from "./UpdateModal";
import UpdateErrorModal from "./UpdateErrorModal";
import { stat } from "fs";
interface Props {
    text:string,
    author:string,
    id:string
};
const NoteCard:NextPage<Props>= (props)=>
{
    const dispatch=useDispatch();
    const state=useSelector((s:any)=>s.crudCard);
    function deleteHandler():void {
        dispatch(crudCardActions.setDeleteId(props.id));
        dispatch(crudCardActions.setDeleting(true));
    }
    function editHandler():void {
      dispatch(crudCardActions.setUpdateId(props.id));
      dispatch(crudCardActions.setUpdating(true));
    }
    
    return (
      <>
    <Card style={{ width: "50rem",maxHeight:"25rem",overflow:"auto",margin:"2rem" }}>
    <Card.Body>
      <Card.Title>{props.author}</Card.Title>
      <Card.Text>
        {props.text}
      </Card.Text>
    </Card.Body>
    <div>
        <Button style={{width:"8rem",marginRight:"0.5rem"}} onClick={editHandler}>edit</Button>
        <Button style={{width:"8rem"}} onClick={deleteHandler}>delete</Button>
    </div>
    </Card>
    {state.deleting&&state.deleteId==props.id&&<DeleteModal id={props.id} note={props.text} />}
    {state.deleteError&&<DeleteErrorModal/>}
    {state.updating&&state.updateId==props.id&&<UpdateModal id={props.id} note={props.text}/>}
    {state.updateError&&<UpdateErrorModal/>}
    </>
    );
}
export default NoteCard;