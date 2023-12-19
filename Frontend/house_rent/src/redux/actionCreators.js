import * as actionTypes from './actionTypes';
import {baseUrl1, baseUrl3} from './baseUrl';
import axios from 'axios';

export const loadBlog = Blog => ({
    type: actionTypes.LOAD_Blog,
    payload: Blog
})

export const BlogLoading = () => ({
    type: actionTypes.Blog_LOADING
})

export const fetchBlog = () => dispatch => {
    dispatch(BlogLoading());

    axios.get(baseUrl1)
        .then(response => response.data)
        .then(Blog => dispatch(loadBlog(Blog)))
}

export const loadProperty = Property => ({
    type: actionTypes.LOAD_Property,
    payload: Property
})

export const PropertyLoading = () => ({
    type: actionTypes.Property_LOADING
})

export const fetchProperty = () => dispatch => {
    dispatch(PropertyLoading());

    axios.get(baseUrl3)
        .then(response => response.data)
        .then(Property => dispatch(loadProperty(Property)))
}

