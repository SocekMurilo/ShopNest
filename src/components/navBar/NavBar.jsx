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
    <Navbar.Brand href="/parts" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Image
        alt=""
        src={logo}
        width="45"
        height="45"
        className="d-inline-block align-top"
      />
      <div style={{textAlign: 'center', marginLeft: "5%"}}>ShopNest</div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
        <Navbar.Brand style={{color: 'black'}} href="/home" disabled>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Image
              alt=""
              src={home}
              width="25"
              height="25"
              className="d-inline-block align-top"
            />
            <span style={{fontSize: 16}}>Home</span>
          </div>
        </Navbar.Brand>
        <Navbar.Brand style={{color: 'black'}} href="/pagamento" disabled>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Image
              alt=""
              src={carrinho}
              width="25"
              height="25"
              className="d-inline-block align-top"
            />
            <span style={{fontSize: 16}}>Carrinho</span>
          </div>
        </Navbar.Brand>
        <Navbar.Brand style={{color: 'black', position: 'relative'}} href="/parts" disabled>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Image
              alt=""
              src={perfil}
              width="25"
              height="25"
              className="d-inline-block align-top"
            />
            <span style={{fontSize: 16}}>Entrar</span>
          </div>
        </Navbar.Brand>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}