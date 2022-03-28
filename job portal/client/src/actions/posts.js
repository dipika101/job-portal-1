import { FETCH_ALL, FETCH_POST, CREATE, DELETE, UPDATE, FETCH_BY_SEARCH, APPLY } from '../constants/actionType';
import * as api from '../api/index';

//action creators
export const getPost = (id)=> async(dispatch) => {
    try {
        const { data } = await api.fetchPost(id);
        console.log(data);
        dispatch({ type: FETCH_POST, payload:  {data} });
        
    } catch (error) {
        console.log(error.message);
    }
    
}

export const getPosts = (page)=> async(dispatch) => {
    try {
        const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);

        dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
    
}

export const getPostsBySearch = (searchQuery)=>async(dispatch)=>{
    try {
        const {data:{data}} = await api.fetchPostsBySearch(searchQuery);
        
        dispatch({type: FETCH_BY_SEARCH, payload: {data}});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) =>  async(dispatch) =>{
    try {
        const {data} = await api.createPost(post);
        dispatch({type : CREATE, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const applicationPost=(value, id)=> async(dispatch)=>{
    try {
        console.log(value);
        const {data} = await api.application(value,id);
        // dispatch({ type: APPLY, payload: data });
        console.log(data);
    } catch (error) {
        
    }
}

export const updatePost = (id, post) => async(dispatch) =>{
    try {
        const {data} = await api.updatePost(id,post);

        dispatch({type: UPDATE, payload:data});
    } catch (error) {
        console.log(error.message);   
    }
}

export const deletePost =(id) => async(dispatch) =>{
    try {
        await api.deletePost(id);

        dispatch({type: DELETE, payload:id});
    } catch (error) {
        console.log(error.message);
    }
}