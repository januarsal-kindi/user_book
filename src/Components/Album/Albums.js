import React,{Component} from 'react';
import Auxa from '../../hoc/Auxa/Auxa';
import AlbumItem from './AlbumItem/AlbumItem'
import {Card} from 'semantic-ui-react';

const Albums = (props) => {
    console.log(props);

    return (
        <Auxa>
        <Card.Group>
        { props.albums.map((album,index)=>{
        return(
           
            <AlbumItem key = {album.id} album = {album}></AlbumItem>
               
        )

         })}
        </Card.Group>
        </Auxa>

)
  
   

}

export default Albums