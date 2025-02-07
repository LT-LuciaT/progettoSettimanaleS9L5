import { Container, Dropdown, Row } from "react-bootstrap/";
import AreaFilm from "./AreaFilm";
import Film2 from "./Film2.jsx";
import FilmDance from "./FilmDance.jsx";

const Homepage = () => {
  return (
    <Container expand="lg" fluid className="bg-dark">
      <div className="d-flex align-items-center">
        <div>
          <h3 className="text-light">TV Shows</h3>
        </div>

        <Dropdown data-bs-theme="dark" className="bg-dark">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              Trending
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Latest</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Romance</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Drama</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row>
        <div>
          <h4 className="text-light ps-5 pt-5">Hunger Games</h4>
        </div>

        <AreaFilm />
        <div>
          <h4 className="text-light ps-5 pt-5">Pirati</h4>
        </div>

        <Film2 />

        <div>
          <h4 className="text-light ps-5 pt-5">Step Up</h4>
        </div>

        <FilmDance />
      </Row>
    </Container>
  );
};
export default Homepage;
