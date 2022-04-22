import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function Login({navigation}) {

  const [login, setLogin] = useState({
    user:'',
    pass:''
  });

  const clicou = () => {
    if (login.length != 0){
      if (login.user == "root" && login.pass == "root"){
        navigation.navigate("Teste");
      }else{
        Alert.alert("Não logado!")
      }
    }else{
      console.log("Digite algo válido!");
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.jpg')}/>

      <TextInput style={styles.input} placeholder="Digite seu email" onChangeText={(texto) => setLogin({...login, user: texto})} value={login.user}/>
      <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} onChangeText={(texto) => setLogin({...login, pass:texto}) } value={login.pass}/>

      <TouchableOpacity style={styles.botao} onPress={() => {clicou()}}>
        <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    fontSize:30,
    fontWeight:"bold",
    color:"white"
  },

  logo:{
    width: 150,
    height: 150,
    borderRadius: 100
  },

  input:{
    marginTop:10,
    width:300,
    backgroundColor: "#fff",
    fontSize:16,
    fontWeight:'bold',
    borderRadius: 3,
    padding: 10,
  },

  botao:{
    width:300,
    height:42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center'
  },

  botaoText:{
    fontSize:16,
    fontWeight: 'bold'
  }
});
