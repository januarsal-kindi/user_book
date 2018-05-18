import React from 'react';
import ItemUser from './ItemUser/itemUser';

const itemUsers = (props) => {
    console.log(props);
    return props.users.map((user,index)=>{
        return(

            <ItemUser key = {index} user = {user}></ItemUser>
            // </
        )

    })
   

}

export default itemUsers;