import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Context as BlogContext} from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
    // const id = navigation.getParam('id')
    const { state } = useContext(BlogContext)

    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
    )

    return <View>
        <Text>{blogPost.title}</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default ShowScreen

