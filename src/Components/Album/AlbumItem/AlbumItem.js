import React,{Component} from 'react';
import Auxa from '../../../hoc/Auxa/Auxa';
import { Item,Button,Icon, Segment ,Image,Card} from 'semantic-ui-react';



const AlbumItem = (props) => {
    return(

     
          
        <Card>
        <Image src='http://gallery.smartadserver.com/demo_web/image/image_placeholder.png' />
        <Card.Content>
          <Card.Header>
            {props.album.title}
          </Card.Header>
          <Card.Meta>
            
          </Card.Meta>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
         
        </Card.Content>
      </Card>
      
    
      
      
    )
    
}

export default AlbumItem ;

