import React from 'react';
import {View, Button, Image, Text} from 'react-native';
import imagem from '../../assets/sith.jpg';
import styles from '../styles';

export default function TelaTriologia3() {
    return(
        <View style={styles.container}>
            <View style={styles.boxDescricao}>
                <Text style={styles.titulo}>A história de Rey</Text>

                <Image source={imagem} style={styles.imagem}/>
                <Text style={styles.textos}>
                    Trilogia sequela. Episódios VII, VIII e IX
                </Text>
                <Text style={styles.textos}>
                    Enquanto surge uma nova ameaça para a galáxia, Rey, uma catadora de sucata, e Finn, um soldado imperial desertor, devem se juntar a Han Solo e Chewbacca para procurar a única esperança de restaurar a paz da galáxia.
                </Text>
            </View>

        </View>
    )
}