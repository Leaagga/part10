import { Pressable, TextInput, View, StyleSheet } from 'react-native'
import Text from './Text'
import { useFormik } from 'formik'
import * as yup from 'yup'
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    rowGap: 8,
    backgroundColor: '#ffff',
    marginHorizontal: 10,
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

    backgroundColor: '#e1e4e8',
    width: '100%',
  },
  inputcontainer: { width: '80%' },
  input: {
    borderWidth: 1,
    width: '100%',
    padding: 4,
    borderRadius: 4,

    height: 50,
  },
  button: {
    marginRight: 20,
    marginLeft: 20,
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
  error: {
    marginRight: 20,
    marginLeft: 20,
    alignSelf: 'flex-start',
    color: '#d73a4a',
  },
})
const SignIn = () => {
  const initialValues = { password: '', username: '' }
  const onSubmit = (values) => {
    console.log(values)
  }
  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            onChangeText={formik.handleChange('username')}
            name='username'
            placeholder='Username'
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <Text style={styles.error}>Username is required.</Text>
          )}
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            onChangeText={formik.handleChange('password')}
            name='password'
            placeholder='Password'
            value={formik.values.password}
            secureTextEntry={true}
          />
          {formik.touched.password && formik.errors.password && (
            <Text style={styles.error}>Password is required.</Text>
          )}
        </View>
        <Pressable style={styles.button} onPress={formik.handleSubmit}>
          <Text style={styles.text}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignIn
