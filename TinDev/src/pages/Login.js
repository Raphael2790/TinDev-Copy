import React , {useState, useEffect}from 'react';
import {AsyncStorage} from 'react-native';
import { KeyboardAvoidingView, Platform, TextInput, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

import logo from '../assets/logo.png'

import api from '../services/api'

export default function Login({ navigation }) {

  const [user, setUser] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if(user) {
        navigation.navigate('Main', {user})
      }
    })
  }, [])

  async function handleLogin() {
    const response = await api.post('/devs', {
      username: user
    })
    const {_id} = response.data


    await AsyncStorage.setItem('user', _id)

    navigation.navigate('Main', {_id})
  }

  return (
    <KeyboardAvoidingView 
    behavior='padding'
    enabled={Platform.OS === 'ios'}
    style={styles.container}>
      <Image source={logo} />

      <TextInput 
      style={styles.textInput} 
      placeholder="Digite seu nome de usuário no Github"
      placeholderTextColor="#999"
      autoCapitalize="none"
      valeu={user}
      onChange={setUser}
      autoCorrect={false}/>

      <TouchableOpacity 
      onPress={handleLogin} 
      style={styles.button}>
        <Text 
        style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
};

const styles= StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    display:'flex',
    padding:30,
  },
  textInput:{
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
    marginTop: 20,
    height:46,
    alignSelf: 'stretch',
    borderStartColor: '#fff',
    paddingHorizontal: 15,
  },
  button:{
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#df4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems:'center',
  },
  buttonText:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'
  }
})