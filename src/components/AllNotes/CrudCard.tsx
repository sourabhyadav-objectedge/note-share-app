import { NextPage } from "next";
import {Card,Button} from 'react-bootstrap'
interface Props {
    text:string,
    author:string,
};
const NoteCard:NextPage<Props>= (props)=>
{
    return (
    
    <Card style={{ width: "50rem",maxHeight:"25rem",overflow:"auto",margin:"2rem" }}>
    <Card.Body>
      <Card.Title>{props.author}</Card.Title>
      <Card.Text>
        {props.text}
      </Card.Text>
    </Card.Body>
    <div>
        <Button style={{width:"8rem",marginRight:"0.5rem "}}>edit</Button>
        <Button style={{width:"8rem"}}>delete</Button>
    </div>
    </Card>
    );
}
export default NoteCard;