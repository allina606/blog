import createDataContext from './createDataContext'

const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'add_blogpost' })
    }
}

// convention, calling it by state
const blogReducer = ( state, action ) => {
    switch(action.type) {
        case 'add_blogpost':
                return [...state, { title: `Blog Post #${ state.length+1 }` }]
            default:
                return state;
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, [])
