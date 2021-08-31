import React from 'react';
import {View, Button, Image, Text} from 'react-native';
import imagem from '../../assets/lucas-skywalker.jpg';
import styles from '../styles';

export default function TelaTriologia2() {
    return(
        <View style={styles.container}>
            <View style={styles.boxDescricao}>
                <Text style={styles.titulo}>A história de Luke Skywalker</Text>
                <Image source={imagem} style={styles.imagem}/>

                <Text style={styles.textos}>
                    Trilogia original. Episódios IV, V e VI
                </Text>
                <Text style={styles.textos}>
                    Essa foi primeira trilogia a surgir porém sua história se passa após a trilogia prequela.
                </Text>
                <Text style={styles.textos}>
                    Nela Luke Skywalker se aventura pela galáxia para atender a um pedido de socorro da princesa Leia e se batalha com o grande vilão Darth Vader.
                </Text>
            </View>
        </View>
    )
}