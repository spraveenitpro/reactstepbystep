import logo from './logo.svg'
import './App.css'
import {
    Button,
    CardGroup,
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Row,
    Col,
    Image,
    Card,
    Jumbotron,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div className="App">
            <header>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            React-Bootstrap
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        Something
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <main>
                    <Container>
                        <Row className="px-4 my-5">
                            <Col sm={7}>
                                <Image
                                    src="https://picsum.photos/900/400"
                                    fluid
                                    rounded
                                    className=""
                                />
                            </Col>
                            <Col sm={5}>
                                <h1 class="font-weight-light">Tagline</h1>
                                <p class="mt-4">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                </p>
                                <Button variant="outline-primary">
                                    Call To Action
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Card className="text-center bg-secondary text-white my-5 py-4">
                                <Card.Body>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                </Card.Body>
                            </Card>
                        </Row>

                        <Row>
                            <Col>
                                <CardGroup>
                                    <Card className="text-center">
                                        <Card.Img
                                            variant="top"
                                            src="https://picsum.photos/id/302/320/200"
                                        />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a wider card with
                                                supporting text below as a
                                            </Card.Text>
                                            <Button variant="primary">
                                                Go somewhere
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img
                                            variant="top"
                                            src="https://picsum.photos/id/301/320/200"
                                        />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This card has supporting text
                                                below as a natural
                                            </Card.Text>
                                            <Button variant="primary">
                                                Go somewhere
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img
                                            variant="top"
                                            src="https://picsum.photos/id/300/320/200"
                                        />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a wider card with
                                                supporting text below as a
                                            </Card.Text>
                                            <Button variant="primary">
                                                Go somewhere
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Button variant="primary" size="md">
                                Block level button
                            </Button>
                        </Row>
                    </Container>
                </main>

                <footer class="py-5 my-5 bg-dark">
                    <Container className="px4">
                        <p class="text-center text-white">
                            Copyright &copy; Your Website 2021
                        </p>
                    </Container>
                </footer>
            </header>
        </div>
    )
}

export default App
