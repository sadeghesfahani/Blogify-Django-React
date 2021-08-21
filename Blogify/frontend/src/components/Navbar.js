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
        this.handleMenuClick = this.handleMenuClick.bind(this)
        fetch('http://127.0.0.1:8000/api/').then(res => res.json()).then((result) => {
            this.setState({categories: result})
            this.GenerateCategory()
        })
    }

    state = {
        something: this.props.something,
        categories: [],
        nav_status : ""

    };

    handleMenuClick(){
        console.log("clicked")
        if(this.state.nav_status == "active"){
            this.setState({nav_status:""})
        }else{
            this.setState({nav_status:"active"})
        }
    }

    GenerateCategory() {
        let clone_category = this.state.categories

        let indexes = []
        let parent_categories = []
        for (let category of clone_category) {
            if (category.parent == null) {
                indexes.push(clone_category.indexOf(category))

            }
        }

        for (let index of indexes) {
            parent_categories.push(clone_category[index])
        }
        this.setState({categories: parent_categories})
    }


    classifyCategory() {

    }


    render() {
        return (
            <>
                <header>
                    <div className='header-container'>
                        <nav className={this.state.nav_status}>
                            <div className="menu-icons" onClick={this.handleMenuClick}>
                                <i className="fas fa-bars"></i>
                                <i className="fas fa-times"></i>
                            </div>
                            <a href="/" className="logo">

                            </a>
                            <ul className="nav-list">
                                {this.state.categories.map((category, index) => {
                                    return (
                                        <>
                                            <li key={index} >
                                                <a href="#"> {category.category_title}</a>

                                                { category.children && <Menu parent={category} children_category={category.children}/>}
                                            </li>
                                        </>

                                    )
                                })}
                            </ul>
                            </nav>
                        </div>
                </header>
            </>
    );
    }


    componentDidMount() {

    }


    }

    export default NavbarComponent;