import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts')

        dispatch({ type: 'get_blogposts', payload: response.data })
    }
}

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content })

        /* 
            why is making a getBlogPosts() request in index.js from
            navigation more fool proof than doing get request and 
            dispatch from here? because it's not API addBlogPost
            function dependent, always calls get from index.js page 
        */

        if (callback) callback()
    }
}

const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)

        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
            await jsonServer.put(`/blogposts/${id}`, { title, content })
        
        dispatch({ type: 'edit_blogpost', payload: { id, title, content }})
        if (callback) callback()
    }
}

// convention to calling first param state
// reducer func what new state should be
const blogReducer = ( state, action ) => {
    switch(action.type) {
        case 'delete_blogpost':
            // returns state datatype where all values == true to given condition, hence deleting current id from state
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map( blogPost => {
                return blogPost.id === action.payload.id ? action.payload : blogPost 
            })   
        case 'get_blogposts':
            return action.payload
        default:
            return state;
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
)
