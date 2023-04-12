import { NextPage } from "next";
import { Card } from "react-bootstrap";

interface Props {
  text: string;
  author: string;
}
const NoteCard: NextPage<Props> = (props) => {
  return (
    <Card
      style={{
        width: "50rem",
        maxHeight: "25rem",
        overflow: "auto",
        margin: "2rem",
      }}
    >
      <Card.Body>
        <Card.Title>{props.author}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default NoteCard;
