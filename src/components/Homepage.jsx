import { Container, Dropdown } from "react-bootstrap/";

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
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Horror</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Romance</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Drama</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Container>
  );
};
export default Homepage;
