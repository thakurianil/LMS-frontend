import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomCard = ({
  _id,
  imageURL,
  title,
  author,
  publishedYear,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <hr />
        <Card.Text>
          {author} - {publishedYear}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
