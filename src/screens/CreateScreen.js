import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { Context as BlogContext} from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { addBlogPost } = useContext(BlogContext)

    return <View>
        <Text style={styles.label}>Enter title: </Text>
        <TextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={styles.input}
        />
        <Text style={styles.label}>Enter Content: </Text>
        <TextInput
            value={content}
            onChangeText={(text) => setContent(text)} 
            style={styles.input}       
        />
        <Button 
            title="Add Blog Post"
            onPress={() => {
                // add callback for navigation to go back to home screen after add_func is done (possibly may take long if API), so no errors
                addBlogPost(title, content, () => {
                    navigation.navigate('Index')
                })
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    }, 
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default CreateScreen

