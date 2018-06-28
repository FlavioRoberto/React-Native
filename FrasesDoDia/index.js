import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';

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
      <TouchableOpacity style={botao}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
}

AppRegistry.registerComponent('FrasesDoDia', () => App);
