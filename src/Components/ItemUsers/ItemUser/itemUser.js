import React,{Component} from 'react';
import Auxa from '../../../hoc/Auxa/Auxa';
import { Item,Button,Icon, Segment ,Card,Feed} from 'semantic-ui-react';



const itemUser = (props) => {

    return(
        <Card style={{margin:'0 auto 20px',width:'100%'}}>
        <Card.Content>
          <Card.Header>
           {props.user.name} - {props.user.username}
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                < Icon name='mail outline'></Icon>
              </Feed.Label>
              <Feed.Content>
                <Feed.Date content='Email' />
                <Feed.Summary>
                  {props.user.email}
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
    
            <Feed.Event>
              <Feed.Label >
                <Icon name='phone'></Icon>
                </Feed.Label>
              <Feed.Content>
                <Feed.Date content='Phone' />
                <Feed.Summary>
                {props.user.phone}
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
    
            <Feed.Event>
            <Feed.Label>
                < Icon name='address book'></Icon>
              </Feed.Label>
              <Feed.Content>
                <Feed.Date content='address' />
                <Feed.Summary>
                  {props.user.address.street},{props.user.address.suite},{props.user.address.city} - {props.user.address.zipcode}
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    )
    
}

export default itemUser;

