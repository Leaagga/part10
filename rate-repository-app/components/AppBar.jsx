import { View, StyleSheet, ScrollView } from 'react-native'
import Text from './Text'
import Constants from 'expo-constants'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { Link } from 'react-router-native'
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    display: 'flex',
    flexDirection: 'row',
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
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.press}>Repositories</Text>
        </Link>
        <Link to='/signin'>
          <Text style={styles.press}>Sign in</Text>
        </Link>
      </ScrollView>
      {/* <Pressable>
        <Text style={styles.press}>Repositories</Text>
        <Text style={styles.press}>Sign in</Text>
      </Pressable> */}
    </View>
  )
}

export default AppBar
