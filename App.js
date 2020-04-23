import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
// curly braces necessary for importing named exports
import { BlogProvider } from './src/context/BlogContext'

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
})

const App = createAppContainer(navigator)

// rather than directly exporting createAppContainer, we've 
// wrapped it with our own custom component below, and exported
// this component
export default () => {
  return <BlogProvider>
      <App />
    </BlogProvider>
}