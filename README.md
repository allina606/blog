# Blog Posts App

### Purpose: 
learn  react-native mobile dev 

### Accomplished: 
* used JSON server and ngrok to make axios network requests
* Global state management using context for blogposts, automating conext creation for different resources, avoid tight coupling (rebuilding feature of redux for learning purposes)
* stack navigation, navigation backtracking automation, utilizing .navigationOptions()
* vector-icons from expo-cli
* TouchableOpacity, FlatList, Button, Image, Text, View, StyleSheet, TextInput primitive elements
* useEffect, useReducer, useState, and useContext hooks
* trade-offs between props and context

## How to run on your machine
`yarn install`\
`yarn start`\
this will start the react-native app up

open another terminal, and run\
`cd jsonserver`\
`yarn run db`\
this will start the jsonserver up

open another terminal, navigate to blog/jsonserver and run\
`cd jsonserver`\
`yarn run tunnel`\
this will start ngrok up. In your terminal, under the online column you will see an ngrok.io URL. Copy and paste this URL into the baseURL value shown in the file '/blog/src/api/jsonServer.js' 

You should have 3 terminals open in the end. Enjoy! 





