import React,{Component} from 'react';
import Auxa from '../../hoc/Auxa/Auxa';
import ItemPost from './itemPost/ItemPost';

const ItemPosts = (props) => {

    return props.posts.map((post,index)=>{
        return(
                <ItemPost key = {index} title = {post.title} body = {post.body}></ItemPost>
        )

    });
  
   

}

export default ItemPosts