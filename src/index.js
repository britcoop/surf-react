import React from "react"; // goes into node modules and grabs react package
import { render } from "react-dom"; //this is just importing the render method from the react dom pkg
import Router from "./components/Router";
import "./css/style.css";

render(<Router />, document.querySelector('#main'));