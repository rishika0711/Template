// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   background-color: #333;
//   padding: 1rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const NavLinks = styled.div`
//   a {
//     color: white;
//     text-decoration: none;
//     margin: 0 1rem;

//     &:hover {
//       color: #f0a500;
//     }
//   }
// `;

// const Navbar = () => {
//   return (
//     <NavbarContainer>
//       <h1>MySite</h1>
//       <NavLinks>
//         <Link to="/">Home</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Signup</Link>
//       </NavLinks>
//     </NavbarContainer>
//   );
// };

// export default Navbar;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed; // Fix the navbar to the top
  top: 0;
  left: 0;
  width: 100%; // Full width
  display: flex;
  justify-content: space-between;
  align-items: center; // Vertically center items
  background-color: #333;
  padding: 1rem 2rem; // Add some spacing
  z-index: 10; // Ensure navbar is on top

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex; // Arrange links horizontally
  align-items: center; 

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    padding: 0.5rem 1rem; // Add padding to links for better UX
    border-radius: 5px; // Optional rounded corners

    &.active { // Apply style to the active link
      background-color: #f0a500;
      color: black; 
    }

    &:hover {
      color: #f0a500;
    }
  }
`;

const Navbar = () => {
  const location = useLocation(); 

  return (
    <NavbarContainer>
      <h1>MySite</h1>
      <NavLinks>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>
          Login
        </Link>
        <Link to="/signup" className={location.pathname === "/signup" ? "active" : ""}>
          Signup
        </Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;