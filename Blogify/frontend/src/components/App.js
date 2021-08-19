import React, {Component} from "react";
import {render} from 'react-dom';
import Navbar from "./Navbar";
import NavbarComponent from "./Navbar";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavbarComponent something='hi'/>
                this is a React components
                <h1>using Django </h1>
            </div>
        );
    }

}

const appDiv = document.getElementById("app")
render(<App/>, appDiv)