import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'

const IndexScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext)

    return <View>
        <Text>Index Screen</Text>
        <Button title="Add Post" onPress={addBlogPost} />
        <FlatList
            data={data}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem = {({ item }) => {
                return <Text>{item.title}</Text>
            }}
        />
    </View>
}

const styles = StyleSheet.create({})

export default IndexScreen

