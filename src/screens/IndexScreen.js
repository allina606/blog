import React, { useContext } from 'react'
import { Context as BlogContext } from '../context/BlogContext'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)

    return <View>
        <Button title="Add Post" onPress={() => navigation.navigate('Create')} />
        <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem = {({ item }) => {
                return <View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <Text style={styles.title}>{item.title} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id) }>
                        <Feather style={styles.icon} name='trash' />
                    </TouchableOpacity>
                </View>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default IndexScreen

