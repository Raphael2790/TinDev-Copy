import React from 'react';
import { KeyboardAvoidingView, Platform, TextInput, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

import logo from '../assets/logo.png'

export default function Login() {
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
      autoCorrect={false}/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
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