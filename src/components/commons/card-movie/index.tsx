import { Card } from "react-bootstrap";

const cardMovie = (
  {
    // id,
    // movie-poster
    // movie-title
    // movie-description,
    // movie-category
  }
) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{}</Card.Title>
        {/* //card image */}
        <Card.Text>{}</Card.Text>
      </Card.Body>
      <Card.Footer>{}</Card.Footer>
    </Card>
  );
};

export { cardMovie };
