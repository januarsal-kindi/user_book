import React,{Component} from 'react';
import Auxa from '../hoc/Auxa/Auxa';
import InputPost from '../Components/InputPost/InputPost';
import ItemUsers from '../Components/ItemUsers/ItemUsers';
import {Grid} from 'semantic-ui-react';
import axios from 'axios';
import SideMenu from '../Components/Navigation/SideMenu';


class UserContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            post : []
        }
    }

    componentDidMount () {
           
        console.log(this.props);
        axios.get( 'https://jsonplaceholder.typicode.com/users' )
            .then( response => {
                console.log(response)
                this.setState ({post: [...response.data]}) 
                // this.setState( { ingredients: response.data } );
            } )
            .catch( error => {
                // this.setState( { error: true } );
            } );
    }


    render(){
        return(
            <Auxa>
                <Grid>
                    <Grid.Column width={3}>
                        <SideMenu></SideMenu>
                    </Grid.Column>
                    <Grid.Column width={10}  >
                        <ItemUsers users = {this.state.post}></ItemUsers>
                    </Grid.Column>
                    <Grid.Column width={3}>
                    </Grid.Column>
                </Grid>
                
            </Auxa>
        )
    }
}

export default UserContainer;