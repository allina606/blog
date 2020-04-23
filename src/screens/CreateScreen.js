import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Context as BlogContext} from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
    // const id = navigation.getParam('id')
    const { state } = useContext(BlogContext)

    return <View>
        <Text>create</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default CreateScreen

