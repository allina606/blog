import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context as BlogContext} from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { addBlogPost } = useContext(BlogContext)

    return <View>
        <BlogPostForm
            submit={ () => {
                // add callback for navigation to go back to home screen after add_func is done (possibly may take long if API), so no errors
                addBlogPost(title, content, () => {
                    navigation.navigate('Index')
                })
            }}
            title={title}
            content={content}
            onChangeTitle={ text => setTitle(text) }
            onChangeContent={ text => setContent(text) }
        />
    </View>
}

const styles = StyleSheet.create({
})

export default CreateScreen

