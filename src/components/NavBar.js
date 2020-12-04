import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Navbar, Nav, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import * as ROUTES from './routes/routes';


//How you display a different nav bar if someone is logged in or logged out
// const Navigation = ({ isAuthed, location }) => (
//   <div>{isAuthed ? NavigationAuth(location): NavigationNonAuth(location)}</div>
// );

const Navigation = (location) => {
  const history = useHistory();
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      className="justify-content-center"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Navbar.Brand href={"/"}>VT Lounge</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav activeKey={location.pathname}>

        <DropdownButton
            className="ml-2"
            title="Menu"
            // size="md"
            variant="light"
          >
            <Dropdown.Item href={`${ROUTES.DASHBOARD}`}>
              Dashboard
            </Dropdown.Item>
            
            <Dropdown.Divider />

            <Dropdown.Item href={`${ROUTES.PROFILE}`}>
              Profile
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item href={`${ROUTES.CLASSLOUNGES}`}>
              Class Lounges
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item href={`${ROUTES.MAJORLOUNGES}`}>
              Major Lounges
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item href={`${ROUTES.SOCIALLOUNGES}`}>
              Social Lounges
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item href={`${ROUTES.HELP}`}>
              Help
            </Dropdown.Item>
          
            
          </DropdownButton>



            {/* Single button example. Push the path instead of route here */}
            <Button class="ml-2" onClick={() => history.push("/login")} variant="outline-light">
                LOGIN
            </Button>


        </Nav>
      </Navbar.Collapse>

      {/* Sign out button log with firebase and rerouting here. */}
      {/* <Button
        className="ml-2"
        variant="primary"
        onClick={() => {
          firebase.auth().signOut();
          history.push('/')
        }}
      >
        Sign Out
      </Button> */}
    </Navbar>
  )
};

//Implement this once auth is done
// const NavigationNonAuth = (location) => {
//   const history = useHistory();
//   return (
//     <Navbar
//       collapseOnSelect
//       expand="sm"
//       className="justify-content-center"
//       bg="dark"
//       variant="dark"
//       fixed="top"
//     >
//       <Navbar.Brand href={"/"}>VT Lounge</Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav activeKey={location.pathname}>
//         <DropdownButton
//             className="ml-2"
//             title="OPTION 1"
//             // size="md"
//             variant="light"
//           >
//             <Dropdown.Item href={`${ROUTES.OptionalRoute}`}>
//               Optional name
//             </Dropdown.Item>
            
//             <Dropdown.Divider />

//             <Dropdown.Item href={`${ROUTES.OptionalRoute}`}>
//               Optional name
//             </Dropdown.Item>
          
            
//           </DropdownButton>
          
//           <Button class="ml-2" onClick={() => history.push("/login")} variant="outline-light">
//                 LOGIN
//           </Button>
//         </Nav>
//       </Navbar.Collapse>
     
//     </Navbar>
//   )
// };


export default Navigation;