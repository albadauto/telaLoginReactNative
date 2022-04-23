import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function Home({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [pessoas, setPessoas] = useState([
    {
      nome: 'José Adauto',
      idade: 21,
      profissao: "Desenvolvedor fullstack"
    },
    {
      nome: 'Emily Rodrigues',
      idade: 16,
      profissao: "Desenvolvedora fullstack"
    },
    {
      nome: 'Marcinho',
      idade: 41,
      profissao: "vagabundo"
    },
    {
      nome: 'Mike',
      idade: 26,
      profissao: "Pintor"
    },
    {
      nome: 'Fulano',
      idade: 'Bastante',
      profissao: "Desenvolvedor frontend"
    }
  ])
  const [pessoasColocar, setPessoasColocar] = useState({
    nome: '',
    idade: 0,
    profissao: ''
  });

  function cadastrarUsuario() {
    setPessoas([{ ...pessoasColocar }, ...pessoas])
  }
  return (
    <ScrollView style={styles.container}>
      <View >
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
        <TouchableOpacity style={styles.botaoProdutos} onPress={() => navigation.navigate("produtos")}>
          <Text style={styles.textoBotao}>Ir Para Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoProdutos} onPress={() => setVisible(!visible)}>
          <Text style={styles.textoBotao}>Cadastrar Usuario</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSair} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textoBotao}>Sair</Text>
        </TouchableOpacity>

        <Modal visible={visible} animationType="slide">

          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.botaoSair}>
              <Text style={styles.textoBotao}>Sair</Text>
            </TouchableOpacity>

            <TextInput style={styles.textInput} placeholder="Nome do usuario" value={pessoasColocar.nome} onChangeText={(texto) => setPessoasColocar({ ...pessoasColocar, nome: texto })} />
            <TextInput style={styles.textInput} placeholder="Idade do usuario" value={pessoasColocar.idade} onChangeText={(texto) => setPessoasColocar({ ...pessoasColocar, idade: texto })} />
            <TextInput style={styles.textInput} placeholder="Profissão do usuario" value={pessoasColocar.profissao} onChangeText={(texto) => setPessoasColocar({ ...pessoasColocar, profissao: texto })} />

            <TouchableOpacity style={styles.salvarBotao} onPress={() => cadastrarUsuario()}>
              <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>
          </View>

        </Modal>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    flex: 1

  },

  title: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  cards: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
  },

  nomes: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  etc: {
    alignSelf: 'center',
    fontSize: 16
  },
  textoBotao: {
    color: "white",
    fontWeight: "bold"
  },
  botaoProdutos: {
    alignSelf: "center",
    backgroundColor: "black",
    padding: 12,
    borderRadius: 10,
    margin: 12
  },
  botaoSair: {
    alignSelf: "center",
    backgroundColor: "#B22222",
    margin: 10,
    padding: 15,
    borderRadius: 5

  },
  textInput: {
    backgroundColor: "#D3D3D3",
    padding: 5,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },

  modalContainer: {
    margin: 20,
  },
  salvarBotao: {
    backgroundColor: "green",
    margin: 10,
    alignSelf: "center",
    padding: 12,
    borderRadius: 5
  }
})