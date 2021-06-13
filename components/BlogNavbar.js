import {Navbar, Nav} from "react-bootstrap";
import Link from 'next/link';
import {useTheme} from "../providers/ThemeProvider";

const BlogNavbar =() => {
  const {theme, toggleTheme} = useTheme();
  return <Navbar
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg" >
    <Navbar.Brand className="fj-navbar-brand">
      <Link  href="/">
        <a>Trabontea</a>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link
          className="fj-navbar-item fj-navbar-link"
          href='/'
          as={()=>
            <Link href='/'>
              <a className="fj-navbar-item fj-navbar-link">Home</a>
            </Link>}
        />
        <Nav.Link
            className="fj-navbar-item fj-navbar-link"
            href='about'
            as={()=>
              <Link href='/about'>
                <a className="fj-navbar-item fj-navbar-link">About</a>
              </Link>}
        />
        <button className="btn btn-success" onClick={toggleTheme}>
          {theme.type}
        </button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default BlogNavbar;