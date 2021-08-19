import React, {Component} from 'react';
import Row, {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import Col from "react-bootstrap";
import Menu from "./Menu";

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.GenerateCategory = this.GenerateCategory.bind(this)
        this.nav_item = <div className=" border-1 mx-2 bg-info">something is here</div>
        this.label = <a href="/home">home</a>
        fetch('http://127.0.0.1:8000/api/').then(res => res.json()).then((result) => {
            this.setState({categories: result})
            this.GenerateCategory()
        })
    }

    state = {
        something: this.props.something,
        categories: []

    };


    GenerateCategory() {
        for (let category of this.state.categories) {
            if (category.parent == null) {
                let index = this.state.categories.indexOf(category)
                this.setState({"categories": this.state.categories.splice(index, 1)})
            }
        }

    }

    classifyCategory() {

    }


    // GenerateCategory(category) {
    //     const category_nav = category.map(function (value, index) {
    //             if (value.parent == null) {
    //                 return <div><a id={value.id} className="dropdown-item" key={index}>{value.category_title}</a>
    //                     <div>
    //
    //                     </div>
    //
    //                     </div>
    //             } else {
    //                 return null
    //             }
    //             ;
    //         }
    //     );
    //
    //     return category_nav
    // };

    render() {
        return (
            <ul>
                {console.log(this.state.categories)}
                {this.state.categories.map((category, index) => {
                return (
                    <li  key={index}> {category.category_title}

                    {/*<Menu children_category={category.children}/>*/}
                    {category.children && <Menu children_category={category.children} />}
                    </li>

                )
            })}
            </ul>

        );
    }


    componentDidMount() {

    }


}

export default NavbarComponent;