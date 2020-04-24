import createDataContext from './createDataContext'

const addBlogPost = dispatch => {
    return (title, content) => {
        dispatch({ type: 'add_blogpost', payload: {title, content} })
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

// convention to calling first param state
// reducer func what new state should be
const blogReducer = ( state, action ) => {
    switch(action.type) {
        case 'add_blogpost':
            return [
                ...state,
                { 
                    id: Math.floor(Math.random()*99999),
                    title: action.payload.title,
                    content: action.payload.content 
                }
            ]
        case 'delete_blogpost':
            // returns state datatype where all values == true to given condition, hence deleting current id from state
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state;
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, [])
