import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Context as BlogContext} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext)

    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
    )

    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)

    return <BlogPostForm
            submit={ () => console.log("submitted") }
            title={title}
            content={content}
            onChangeContent={ text => setContent(text) }
            onChangeTitle={ text => setTitle(text) }
        />
}

const styles = StyleSheet.create({
})

export default EditScreen

