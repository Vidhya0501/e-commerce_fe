import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartData } from "../context/CartContext";

const Header = ({ isAuth }) => {
  const navigate = useNavigate();
  const { setUser, setIsAuth } = UserData();
  const { totalItem } = CartData();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
  };
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="lg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand>Shop Nest</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-4"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
           
              <Link to="/">Home</Link>
            
              <Link to="/products">Products</Link>
            
            {isAuth && (
              
                <Link to="/account">Account</Link>
             
            )}
          </Nav>

          {isAuth && (
            <Button
              variant="success"
              className="mx-2"
              style={{ fontSize: "15px" }}
              onClick={() => navigate("/cart")}
            >
              <AiOutlineShoppingCart />{" "}
              <span
                style={{
                  background: "red",
                  padding: "3px",
                  borderRadius: "50%",
                }}
              >
                {totalItem}
              </span>
            </Button>
          )}

          {isAuth ? (
            <Button onClick={logoutHandler} variant="danger">
              Logout
            </Button>
          ) : (
            <Button onClick={() => navigate("/login")} variant="success">
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;