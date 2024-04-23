import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import style from './NavBar.module.css'

import neutropica from '../../assets/Neutropica.png'
import logo from '../../assets/logo.png'
import home from '../../assets/home.png'
import carrinho from '../../assets/carrinho.png'
import perfil from '../../assets/perfil.png'


export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">
            <Image
              alt=""
              src={logo}
              width="64"
              height="64"
              className="d-inline-block align-top"
              style={{justifyContent: 'center'}}
            />{' '}
            ShopNest
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link style={{color: 'black'}} href="#" disabled>
              <Image
                alt=""
                src={home}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />{' '}
                Home
            </Nav.Link>
            <Nav.Link style={{color: 'black'}} href="#" disabled>
              <Image
                  alt=""
                  src={carrinho}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />{' '}
                Carrinho
            </Nav.Link>
              <Nav.Link style={{color: 'black', position: 'relative'}}  href="#" disabled>
                <Image
                    alt=""
                    src={perfil}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    style={{}}
                  />{' '}
                  Entrar
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}