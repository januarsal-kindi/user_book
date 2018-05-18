import React from 'react'
import {Segment,Button,TextArea,Form} from 'semantic-ui-react'

const inputPost = () => {
    return (
        <Segment clearing>
            <div>
            <Form>
                <TextArea autoHeight placeholder='Try adding multiple lines' />
                <Button style = {{marginTop : '10px'}} compact floated ="right" positive>Post</Button>
            </Form>
            </div>
        </Segment>
    )
}
export default inputPost;

