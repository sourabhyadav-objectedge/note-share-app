import { NextPage } from "next";
import styles from "@/styles/updateModal.module.scss"
import {Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { crudCardActions,updateNote} from "@/store/crudCardSlice";
import {Form} from 'react-bootstrap';
import { useRef } from "react";
import { AppDispatch } from "@/store";
interface Props{
    note:string,
    id:string
}
const UpdateModal:NextPage<Props> = (props)=>{
    const textRef=useRef<HTMLTextAreaElement>(null);
    const dispatch=useDispatch<AppDispatch>();
    document.body.style.overflow="hidden";
    // console.log(props.id,props.note);
    return <div className={styles.container} style={{top:document.body.scrollTop}}>
           <div>
            <h1>Please edit</h1>
            <Form style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem"}}>
                    <Form.Label>Your Note</Form.Label>
                    <textarea  style={{width:"80%",fontSize:"1.5rem"}} ref={textRef} defaultValue={props.note} rows={3} ></textarea>
            </Form>
            <span>
                <Button  onClick={()=>{document.body.style.overflow="auto";dispatch(updateNote({_id:props.id,note:textRef.current?.value}));}}>Update</Button>
                <Button onClick={()=>{document.body.style.overflow="auto";dispatch(crudCardActions.setUpdating(false))}}>Cancel</Button>
            </span>
            </div> 
    </div>;
}
export default UpdateModal