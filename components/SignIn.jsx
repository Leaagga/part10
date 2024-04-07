import { Pressable, Text, TextInput, View, StyleSheet } from 'react-native'
import { useFormik } from 'formik'
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    rowGap: 8,
    backgroundColor: '#ffff',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

    backgroundColor: '#e1e4e8',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    width: '100%',
    padding: 4,
    borderRadius: 4,
    width: '80%',
    height: 50,
  },
  button: {
    backgroundColor: '#0366d6',
    borderRadius: 4,
    display: 'flex',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
})
const SignIn = () => {
  const initialValues = { password: '', username: '' }
  const onSubmit = (values) => {
    console.log(values)
  }

  const formik = useFormik({ initialValues, onSubmit })
  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={formik.handleChange('username')}
          name='username'
          placeholder='Username'
          value={formik.values.username}
        />
        <TextInput
          style={styles.input}
          onChangeText={formik.handleChange('password')}
          name='password'
          placeholder='Password'
          value={formik.values.password}
          secureTextEntry={true}
        />
        <Pressable style={styles.button} onPress={formik.handleSubmit}>
          <Text style={styles.text}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignIn
