import React, { useContext, useEffect } from 'react'
import { Context as BlogContext } from '../context/BlogContext'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext)

    useEffect(() => {
        getBlogPosts();

        // whenever we're "focused" on index.js screen, function gets called
        navigation.addListener('didFocus'), () => {

        }
    }, [])

    return <View>
        <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.id}
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

// customize what's shown in navigation header
// when stack navigator builds screen, looks at this function first to build out
IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight:
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name='plus' size={30} />
            </TouchableOpacity>
    }
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

