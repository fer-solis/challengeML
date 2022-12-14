import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import logo from '../img/logo.png';
import search from '../img/search.png';

const NavBar = () => {
  const {
    href,
  } = window.location;
  const url = new URL(href);
  const query = url.searchParams.get("search");

  const [find, setFind] = useState(query ? query : '');
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
       event.preventDefault();
       event.stopPropagation();
       alert('Ingresa un valor a buscar');
    } else {
      event.preventDefault()
      const site = window.location.origin;
      window.location.replace(`${site}/items?search=${find}`);
      setValidated(true)
    }
 }

  return (
    <Navbar className='navbar-wrapper' expand='lg'>
      <Container className='d-flex col-lg-10 offset-lg-1'>
        <Navbar.Brand href='/'>
          <Image src={ logo } fluid={ true } />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0 w-100'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className='d-flex w-100' noValidate validated={ validated } onSubmit={ handleSubmit }>
              <Form.Control
                aria-label='Search'
                className='searchBox'
                name='search'
                placeholder='Nunca dejes de buscar'
                required
                type='search'
                value={ find } 
                onChange={ val => setFind(val.target.value) }
              />
              <Button
                className='containerSearchIcon'
                type='submit'
                variant='outline-success'>
                  <Image src={ search } fluid={ true } />
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;