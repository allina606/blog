import React, { useState } from 'react'

const BlogContext = React.createContext()

// children is unrelated to context, dif feature in react
// export tag is named export w out default tag
export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([])
    
    const addBlogPost = () => {
        setBlogPosts([... blogPosts, { title: `Blog Post #${blogPosts.length + 1}`}])
    }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext;