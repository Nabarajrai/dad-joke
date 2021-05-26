import "./App.css";
import JokeList from "./JokeList";

function App() {
  return (
    <div className="App">
      <JokeList />
    </div>
  );
}
export default App;

// // // // export default App;
// // // // import React, { Component } from "react";

// // // // export class App extends Component {
// // // //   constructor(props) {
// // // //     super(props);
// // // //     this.state = {
// // // //       page: "home",
// // // //     };
// // // //   }
// // // //   handleClick(newPage) {
// // // //     this.setState({
// // // //       page: newPage,
// // // //     });
// // // //   }
// // // //   randerPage = () => {
// // // //     if (this.state.page === "home") return <Home />;
// // // //     else if (this.state.page === "about") return <About />;
// // // //     else if (this.state.page === "contact") return <Contact />;
// // // //   };
// // // //   render() {
// // // //     console.log(this.state);
// // // //     return (
// // // //       <div>
// // // //         <nav>
// // // //           <li>
// // // //             <a onClick={() => this.handleClick("home")} href="#">
// // // //               Home
// // // //             </a>
// // // //           </li>
// // // //           <li>
// // // //             <a onClick={() => this.handleClick("about")} href="#">
// // // //               About
// // // //             </a>
// // // //           </li>
// // // //           <li>
// // // //             <a onClick={() => this.handleClick("contact")} href="#">
// // // //               Contace
// // // //             </a>
// // // //           </li>
// // // //         </nav>
// // // //         <div>{this.randerPage()}</div>
// // // //       </div>
// // // //     );
// // // //   }
// // // // }

// // // // export default App;

// // // import React, { Component } from "react";
// // // import { Route } from "react-router-dom";
// // // const Home = () => {
// // //   return (
// // //     <div>
// // //       <h1>Hellow I am home page</h1>
// // //     </div>
// // //   );
// // // };

// // // const About = () => {
// // //   return (
// // //     <div>
// // //       <h1>Hellow I am About page</h1>
// // //     </div>
// // //   );
// // // };
// // // const Contact = () => {
// // //   return (
// // //     <div>
// // //       <h1>Hellow I am contact page</h1>
// // //     </div>
// // //   );
// // // };

// // // export class App extends Component {
// // //   render() {
// // //     return <div>
// // //       <Route path='/' component={Home} />
// // //       <Route path='/About' component={About} />
// // //       <Route path='/Contact' component={C} />
// // //     </div>;
// // //   }
// // // }

// // // export default App;

// // import React, { Component } from "react";
// // import { Route, Switch, NavLink } from "react-router-dom";
// // import Home from "./Home";
// // import About from "./About ";
// // import Contact from "./Contact";
// // import Hate from "./hate";
// // import "./App.css";
// // export class App extends Component {
// //   render() {
// //     return (
// //       <div className="app">
// //         <NavLink exact activeClassName="activelink" to="/">
// //           Home
// //         </NavLink>
// //         <NavLink exact activeClassName="activelink" to="/about">
// //           About
// //         </NavLink>
// //         <NavLink exact activeClassName="activelink" to="/Contact">
// //           Contact
// //         </NavLink>

// //         <Switch>
// //           <Route exact path="/" component={Home} />
// //           <Route exact path="/About/Hate" component={Hate} />
// //           <Route exact path="/About" component={About} />
// //           <Route exact path="/Contact" component={Contact} />
// //         </Switch>
// //       </div>
// //     );
// //   }
// // }

// // export default App;

// // import React, { Component } from "react";
// // import VendingMachine from "./VendingMachine";
// // import Cola from "./Cola";
// // import { Switch, Route } from "react-router-dom";
// // import Beer from "./Beer";

// // export class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <Switch>
// //           <Route exact path="/" component={VendingMachine} />
// //           <Route path="/cola" component={Cola} />
// //           <Route path="/beer" component={Beer} />
// //         </Switch>
// //       </div>
// //     );
// //   }
// // }

// // export default App;

// // import React, { Component } from "react";

// // export class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <h3>Hellow</h3>
// //       </div>
// //     );
// //   }
// // }

// // export default App;

// import React, { Component } from "react";
// import RoutPram from "./RoutPram";
// import { Route, Switch } from "react-router-dom";
// import GithubUser, { githubuser } from "./githubuser";
// import InputSearch from "./inputSearch";
// import Nabvar from "./navbar";

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Nabvar />
//         <Switch>
//           <Route
//             exact
//             path="/route/:name"
//             // // render={(routeProps) => <RoutPram {...routeProps} />}
//             component={RoutPram}
//           />
//           <Route exact path="/" component={InputSearch} />
//           {/* <Route
//             exact
//             path="/route/:name/user/:getname"
//             component={GithubUser}
//           />
//           <Route render={() => <h2>Not fount !!!</h2>} /> */}

//           {/* <Route
//           path="/route/rameshsyn"
//           render={() => <RoutPram name="rameshsyn" />}
//         />
//         <Route path="/route/colt" render={() => <RoutPram name="colt" />} /> */}
//           {/* <RoutPram name="rameshsyn" />
//         <RoutPram name="colt" />
//         <RoutPram name="nabarajrai" /> */}
//           <Route render={() => <h2>not found</h2>} />
//         </Switch>
//       </div>
//     );
//   }
// }
// export default App;

// import React, { useState } from "react";

// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from "reactstrap";

// const App = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">reactstrap</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">
//                 GitHub
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>Option 1</DropdownItem>
//                 <DropdownItem>Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>Reset</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default App;
