import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext)

    return <View>
        <Text>Index Screen</Text>
        <FlatList
            data={blogPosts}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem = {({ item }) => {
                return <Text>{item.title}</Text>
            }}
        />
    </View>
}

const styles = StyleSheet.create({})

export default IndexScreen

