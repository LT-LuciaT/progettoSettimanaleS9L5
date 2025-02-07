import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class AreaFilm extends Component {
  state = {
    films: [],
  };

  fetchMovie = async () => {
    const resp = await fetch("http://www.omdbapi.com/?apikey=b55e94bb&s=hunger", {
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
            <Card key={index} style={{ width: "18rem", margin: "10px" }}>
              <Card.Img variant="top" src={film.Poster} alt={film.Title} />
              <Card.Body>
                <Card.Title>{film.Title}</Card.Title>
                <Card.Text>{film.Year}</Card.Text>
                <Button variant="primary" href={`https://www.imdb.com/title/${film.imdbID}`} target="_blank">
                  More Info
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default AreaFilm;
