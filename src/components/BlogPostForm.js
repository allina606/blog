import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const BlogPostForm = ({ submit, title, content, onChangeTitle, onChangeContent }) => {
    return <View>
        <Text style={styles.label}>Enter title: </Text>
        <TextInput
            value={title}
            onChangeText={text => onChangeTitle(text) }
            style={styles.input}
        />
        <Text style={styles.label}>Enter Content: </Text>
        <TextInput
            value={content}
            onChangeText={(text) => onChangeContent(text)} 
            style={styles.input}       
        />
        <Button 
            title="Submit"
            onPress={ () => submit() }
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

export default BlogPostForm
