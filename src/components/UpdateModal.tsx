import { NextPage } from "next";
import styles from "@/styles/updateModal.module.scss"
import {Button} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux'
import { crudCardActions,updateNote} from "@/store/crudCardSlice";
import {Form} from 'react-bootstrap';
import { useRef } from "react";
interface Props{
    note:string,
    id:string
}
const UpdateModal:NextPage<Props> = (props)=>{
    const textRef=useRef<any>(null);
    const dispatch=useDispatch<any>();
    // console.log(props.id,props.note);
    return <div className={styles.container}>
           <div>
            <h1>Please edit</h1>
            <Form style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem"}}>
                    <Form.Label>Your Note</Form.Label>
                    <textarea  style={{width:"80%",fontSize:"1.5rem"}} ref={textRef} defaultValue={props.note} rows={3} ></textarea>
            </Form>
            <span>
                <Button  onClick={()=>{dispatch(updateNote({_id:props.id,note:textRef.current?.value}));}}>Update</Button>
                <Button onClick={()=>{dispatch(crudCardActions.setUpdating(false))}}>Cancel</Button>
            </span>
            </div> 
    </div>;
}
export default UpdateModal