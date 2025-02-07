import "../App.css";
import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class FilmDance extends Component {
  state = {
    films: [],
  };

  fetchMovie = async () => {
    const resp = await fetch("http://www.omdbapi.com/?apikey=b55e94bb&s=step up", {
      method: "GET",
    });

    if (resp.ok) {
      const data = await resp.json();
      if (data.Search) {
        this.setState({ films: data.Search.slice(0, 5) });
      }
    }
  };

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { films } = this.state;
    return (
      <div className="text-light">
        <div className="film-cards d-flex flex-wrap">
          {films.map((film, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} xxl={2}>
              <Card className="my-3">
                <Card.Img variant="top" src={film.Poster} alt={film.Title} />
                <Card.Body className="bg-dark bg-opacity-75">
                  <Card.Title className="text-light">{film.Title}</Card.Title>
                  <Card.Text className="text-light">{film.Year}</Card.Text>
                  <Button variant="primary" href={`https://www.imdb.com/title/${film.imdbID}`} target="_blank">
                    Play
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </div>
    );
  }
}

export default FilmDance;
