import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
    render() {
        return (

            // <div></div>

            <ul>
                {this.props.children_category.map((category, index) => {
                    return (
                        <>
                        <li key={index}>{category.category_title}</li>
                    {category.children && <Menu children_category={category.children} />}
                    </>
                    )
                })}
            </ul>
        );
    }
}

Menu.propTypes = {};

export default Menu;
