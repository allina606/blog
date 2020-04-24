import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context as BlogContext} from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(BlogContext)

    return <BlogPostForm
            onSubmit={ (title, content) => {
                // add callback for navigation to go back to home screen after add_func is done (possibly may take long if API), so no errors
                addBlogPost(title, content, () => {
                    navigation.navigate('Index')
                })
            }}
        />
}

const styles = StyleSheet.create({
})

export default CreateScreen

