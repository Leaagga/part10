import { View, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
  },
  press: {
    color: 'white',
    fontSize: 20,
    margin: 18,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.press}>Repositories</Text>
      </Pressable>
    </View>
  )
}

export default AppBar
