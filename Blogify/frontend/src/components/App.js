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
                <NavbarComponent sitename='بلاگیفای'/>
                
            </div>
        );
    }

}

const appDiv = document.getElementById("app")
render(<App/>, appDiv)