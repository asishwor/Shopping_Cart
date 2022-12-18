import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
// ssh-keygen -t rsa -b 4096 -C "asishwor@gmail.com"
//eval $(ssh-agent -s)
//public key added in the github
//private key added into local server added in root => ssh-add -K ~/.ssh/id_rsa

const Header = () => {
  return (
    //==>
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "50px" }}>
        <Container>
          <Navbar.Brand href="#home">Online Shopping</Navbar.Brand>
          <Navbar.Text className="search ">
            <FormControl placeholder="search" width={500} />
          </Navbar.Text>

          {/* this is for nav link  */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <BsFillCartFill style={{ color: "white", fontSize: "25px" }} />
              <Badge>{0}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: "370px", padding: "10px" }}>
              <span>this cart is empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
