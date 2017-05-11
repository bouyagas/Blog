import React, { Component } from 'react';
import Main from '../components/Main/Main.jsx';
import './MainContainer.css'

class MainContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
                 <Main />
                 { this.props.children && React.cloneElement(this.props.children, {})}
        	</div>
        );
    }
}

export default MainContainer;
