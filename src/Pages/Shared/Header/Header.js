import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavLink} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar bg="light" expand="lg" className='sticky-top' >
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className='fs-2 fw-bold ps-2'>Law<span className='text-secondary'>&</span>Lawyer</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/home' href="home" className='fs-5 text-design ps-3'>Home</Nav.Link>
                        <Nav.Link href="home#services" className='fs-5 text-design ps-3'>Services</Nav.Link>
                        {/* <Nav.Link as={Link} to='/blog' className='fs-5 text-design ps-3'>Blog</Nav.Link> */}
                        <Nav.Link as={Link} to='/checkout' className='fs-5 text-design ps-3'>Check out</Nav.Link>
                        <Nav.Link as={Link} to='/about' className='fs-5 text-design ps-3'>About</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        {
                            user?
                                <Button onClick={handleSignOut} variant="outline-secondary" >Sign out</Button>
                            :
                                <Nav.Link as={Link} to='/login' className='fs-5 text-design ps-3' >Login</Nav.Link>
                        }
                        
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;