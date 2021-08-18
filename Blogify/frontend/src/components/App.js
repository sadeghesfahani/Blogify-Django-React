import React, {Component} from "react";
import {render} from 'react-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                this is a React component
                <h1>using Django </h1>
            </div>
        );
    }

}

const appDiv = document.getElementById("app")
render(<App/>, appDiv)