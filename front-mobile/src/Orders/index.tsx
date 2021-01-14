import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Headers';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {

    const [isLoading, setIsLoading] = useState(false);
    const [orders, setOrders] = useState<Order[]>([]);
    const navigation = useNavigation();
    //isFocused é um hook para indicar se o componente foi acionado ou nao
    //sendo assim podemos usar ele pra saber a hora de renderizar a pagina novamente
    const isFocused = useIsFocused();

    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', {
            order
        });
    }

    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(error => Alert.alert('Houve um erro ao buscar os pedidos!'))
            .finally(() => setIsLoading(false));
    }
    //useeffect é para que toda vez que a tela seja renderizada, ele tome uma acao
    
    useEffect(() => {
        if(isFocused) {
            fetchData();
        }
    }, [isFocused]);

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text style={styles.text}>Buscando Pedidos...</Text>
                ) : (
                        orders.map(order => (
                            <TouchableWithoutFeedback 
                                key={order.id} 
                                onPress={() => handleOnPress(order)}>
                                <OrderCard order={order} />
                            </TouchableWithoutFeedback>
                        ))
                    )}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    text: {
        color: '#263238',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: 'bold',
        marginTop: 31,
        textAlign: 'center'
    }
});

export default Orders;