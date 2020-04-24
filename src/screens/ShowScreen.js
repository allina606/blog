import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Context as BlogContext} from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    // const id = navigation.getParam('id')
    const { state } = useContext(BlogContext)

    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
    )

    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight:
            <TouchableOpacity 
                onPress={() => 
                    navigation.navigate('Edit', { id: navigation.getParam('id') })
                }
            >
                <EvilIcons name='pencil' size={40} />
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({

})

export default ShowScreen

