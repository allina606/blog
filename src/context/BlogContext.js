import React from 'react'

const BlogContext = React.createContext()

// children is unrelated to context, dif feature in react
// export tag is named export w out default tag
export const BlogProvider = ({ children }) => {
    const blogPosts = [
        { title: 'Blog Post #1' },
        { title: 'Blog Post #2' }
    ]

    return <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext;