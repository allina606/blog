import React from 'react'

const BlogContext = React.createContext()

// children is unrelated to context, dif feature in react
// export tag is named export w out default tag
export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider>
        {children}
    </BlogContext.Provider>
}