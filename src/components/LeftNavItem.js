import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class LeftNavItem extends Component {
    getStyle = () => {
        return  { 
            //If Setting is enabled for user
            textDecoration: this.props.leftNav.enabled ? 'none' : 'line-through',
            background: '#f4f4f4',
            padding: '1px'
            //.. Nav Item Style
        }
    }
    
    render() {
        const { id, title } = this.props.leftNav;
        return (
            <div style={this.getStyle()}>
              <p>
                <input  type="checkbox" 
                        onChange={this.props.expanded.bind(this, id)} /> {' '}
                { title }
              </p>  
            </div>
        )
    }
}

// PropTypes
LeftNavItem.propTypes = {
    leftNav: PropTypes.object.isRequired
}

export default LeftNavItem
