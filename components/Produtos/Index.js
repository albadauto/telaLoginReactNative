import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Produtos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos os produtos</Text>

      <View style={styles.card}>
          <Image style={styles.productImage}source={require("../../assets/arroz.jpg")}/>
          <View>
              <Text>Produto: Arroz</Text>
              <Text>Preço: R$ 90</Text>
              <Text>Fornecedor: Perdigão</Text>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#333",
        flex:1
    },
    title:{
        alignSelf:"center",
        fontSize:20,
        color:"white",
        fontWeight:"bold",
        margin:10,

    },
    productImage:{
        maxHeight:300,
        alignSelf:"center",
    }
})