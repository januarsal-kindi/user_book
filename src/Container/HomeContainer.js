import React,{Component} from 'react';
import Auxa from '../hoc/Auxa/Auxa';
import ItemPosts from '../Components/ItemPosts/ItemPosts';
import InputPost from '../Components/InputPost/InputPost';
import {Grid} from 'semantic-ui-react';
import axios from 'axios';
import SideMenu from '../Components/Navigation/SideMenu';


class HomeContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            post : []
        }
    }

    componentDidMount () {
           
        console.log(this.props);
        axios.get( 'https://jsonplaceholder.typicode.com/posts' )
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
                    <Grid.Column width={12}>
                        <InputPost/>
                        <ItemPosts posts = {this.state.post}></ItemPosts>
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>
                </Grid>
                
            </Auxa>
        )
    }
}

export default HomeContainer;