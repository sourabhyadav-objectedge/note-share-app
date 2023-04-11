import { NextPage } from "next";
import {Card,Button} from 'react-bootstrap'
import { crudCardActions } from "@/store/crudCardSlice";
import {useDispatch,useSelector} from 'react-redux'
import DeleteModal from "./DeleteModal";
import DeleteErrorModal from "./DeleteErrorModal";
import UpdateModal from "./UpdateModal";
import UpdateErrorModal from "./UpdateErrorModal";
import { ReduxStateType } from "@/store";
interface Props {
    text:string,
    author:string,
    id:string,
    index:number
};
const NoteCard:NextPage<Props>= (props)=>
{
    const dispatch=useDispatch();
    const isDeleting=useSelector((s:ReduxStateType)=>s.crudCard.deleting[props.index]);
    const deleteError=useSelector((s:ReduxStateType)=>s.crudCard.deleteError[props.index]);
    const isUpdating=useSelector((s:ReduxStateType)=>s.crudCard.updating[props.index]);
    const updateError=useSelector((s:ReduxStateType)=>s.crudCard.updateError[props.index]);
    function deleteHandler():void {
        dispatch(crudCardActions.setDeletingByIndex({index:props.index,value:true}));

    }
    function editHandler():void {
      dispatch(crudCardActions.setUpdatingByIndex({index:props.index,value:true}));
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
    {isDeleting&&<DeleteModal id={props.id} index={props.index} />}
    {deleteError&&<DeleteErrorModal index={props.index}/>}
    {isUpdating &&<UpdateModal id={props.id} note={props.text} index={props.index}/>}
    {updateError&&<UpdateErrorModal index={props.index}/>}
    </>
    );
}
export default NoteCard;