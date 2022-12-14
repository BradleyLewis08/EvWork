import React, { useState, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import BackButton from '../../components/BackButton'
import { theme } from '../../core/theme'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import { login } from '../../functions'
import { useDispatch } from 'react-redux'
import { authenticate, saveUser } from '../../slices/app.slice'

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [user, setUser] = useState(null)

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    const temp = login(email, password)
    temp.then((prom) => setUser(prom))
    // navigation.reset({
    // 	index: 0,
    // 	routes: [{ name: 'Dashboard' }],
    // })
  }

  useEffect(() => {
    if (user) {
      dispatch(saveUser({ user: user }))
      dispatch(authenticate({ loggedIn: true, checked: true }))
    }
  }, [user])

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header
        style={{
          color: '#1C4532',
          fontSize: 28,
          fontWeight: '700',
          marginBottom: 10,
        }}
      >
        Welcome back.
      </Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don???t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignupScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  forgot: {
    fontSize: 13,
    // color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    // color: theme.colors.primary,
  },
})
