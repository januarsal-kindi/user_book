import React,{Component} from 'react';
import Auxa from '../../../hoc/Auxa/Auxa';
import { Item,Button,Icon, Segment } from 'semantic-ui-react';



const ItemPost = (props) => {
    return(
     <Segment>
    <Item.Group>
        <Item>
                <Item.Content>
                    <Item.Header as='a'>{props.title}</Item.Header>
                    <Item.Meta>
                        <span className='cinema'>IFC</span>
                    </Item.Meta>
                    <Item.Description><p>{props.body}</p></Item.Description>
                    <Item.Extra>
                    <Button
                        floated ="right"
                        color='red'
                        content='Like'
                        icon='heart'
                        label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
                     />
                    <Button
                        floated ="right"
                        basic
                        color='blue'
                        content='Fork'
                        icon='fork'
                        label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: '2,048' }}
                    />
                    </Item.Extra>
                </Item.Content>
            </Item>
    </Item.Group>
    </Segment>   
    )
    
}

export default ItemPost;

