import React, {Component} from 'react';


class Menu extends Component {
    render() {
        return (
            <>
                <ul className="sub-menu-c">
                    {this.props.children_category.map((category, index) => {
                        return (
                            <li key={index}>
                                <a href="#">
                                    {category.category_title}
                                </a>
                                {category.children && <Menu children_category={category.children}/>}
                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

Menu.propTypes = {};

export default Menu;
