import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {  

  const pessoas = [
    {
      nome:'José Adauto',
      idade: 21,
      profissao:"Desenvolvedor fullstack"
    },
    {
      nome:'Emily Rodriguez',
      idade: 16,
      profissao:"Desenvolvedora fullstack"
    },
    {
      nome:'Marcinho',
      idade: 41,
      profissao:"vagabundo"
    },
    {
      nome:'Mike',
      idade: 26,
      profissao:"Pintor"
    },
    {
      nome:'Fulano',
      idade: 'Bastante',
      profissao:"Desenvolvedor frontend"
    }
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listar Pessoas</Text>
      {pessoas.map((val, x) => {
        return (
          <View style={styles.cards}> 
            <Text style={styles.nomes}>Nome: {val.nome}</Text>
            <Text style={styles.etc}>Profissão: {val.profissao}</Text>
            <Text style={styles.etc}>idade: {val.idade}</Text>

          </View>
        )
      })}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#333",
    flex:1

  },

  title:{
    alignSelf:'center',
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    margin:10
  },
  cards:{
    backgroundColor:'white',
    margin: 10,
    borderRadius:5,
  },

  nomes:{
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:16
  },
  etc:{
    alignSelf:'center',
    fontSize:16
  }
})