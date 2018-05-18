import React, { Component } from 'react';

import Auxa from '../Auxa/Auxa';
import Toolbar from '../../Components/Navigation/Toolbar';
import { Container } from 'semantic-ui-react'

class Layout extends Component {
    // state = {
    //     showSideDrawer: false
    // }

    // sideDrawerClosedHandler = () => {
    //     this.setState( { showSideDrawer: false } );
    // }

    // sideDrawerToggleHandler = () => {
    //     this.setState( ( prevState ) => {
    //         return { showSideDrawer: !prevState.showSideDrawer };
    //     } );
    // }

    render () {
        return (
            <Auxa>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                {/* <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} /> */}
                <Container style ={{paddingTop : '68px'}}  >
                    {this.props.children}
                    
                </Container>
            </Auxa>
        )
    }
}

export default Layout;