import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AppRegistry,
  Alert
} from 'react-native';

const frasesDoDia = [
    'A motivação não é a fórmula mágica para atingir o sucesso, mas certamente garante o caminho mais rápido para o alcançar.',
    'Você não só tem o direito de ser feliz como também tem a obrigação de lutar para alcançar a felicidade.',
    'Não perca a motivação só porque as coisas não estão correndo como o previsto. Adversidade gera sabedoria e é isso que levará você ao sucesso.',
    'Encare o que fez de errado com motivação, pois é isso que o ajudará a fazer certo da próxima vez.',
    'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.'
];

const gerarNovaFrase = ()=>{
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 5);
    return Alert.alert("Frase do dia",frasesDoDia[numeroAleatorio]);
};

const estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
  },
  botao: {
    backgroundColor: '#538530',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 2,
  },
  textoBotao:{
    color:'#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
};

const App = () => {
  const { principal, imagem, botao,textoBotao } = estilos;
  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity style={botao} onPress={gerarNovaFrase}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
}

AppRegistry.registerComponent('FrasesDoDia', () => App);
