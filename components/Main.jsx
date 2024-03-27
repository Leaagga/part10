import { StyleSheet, Text, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-native'
import { NativeRouter } from 'react-router-native'
import SignIn from './SignIn'
export default function Main() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route
          path='/'
          element={
            <View style={styles.container}>
              <RepositoryList />
            </View>
          }
        />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      {/* <View style={styles.container}>
        <RepositoryList />
      </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e4e8',
    width: '100%',
  },
})
