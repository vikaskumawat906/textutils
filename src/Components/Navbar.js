
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function navbar(props) {

  return (
    <>
      <Navbar expand="lg" className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Container fluid>
          <Navbar.Brand >{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/" className='nav-link'>Home</Link>
              <Link to="/about" className='nav-link'>About</Link>
            </Nav>
            <Form style={{ display: 'flex' }} className='mx-3'>
              <Form.Check className={`mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={props.toggleMode}
                type="switch"
                id="custom-switch"
                label="Dark Mode"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default navbar;