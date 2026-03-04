import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen({ route, navigation }) {
    const { item } = route.params || {};

    // Setup right header buttons
    useEffect(() => {
        navigation.setOptions({
            headerTitle: `Detay: ${item?.id || ''}`,
            headerRight: () => (
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconButton}>
                        <Ionicons name="home" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation, item]);

    if (!item) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>Detay bulunamadı!</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.divider} />
                <Text style={styles.detail}>{item.detail}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 15,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: '#D84315',
    },
    headerRight: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 15,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    cardHeader: {
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    dateText: {
        fontSize: 12,
        color: '#888',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#D84315',
        marginBottom: 15,
    },
    divider: {
        height: 1,
        backgroundColor: '#EEE',
        marginBottom: 15,
    },
    detail: {
        fontSize: 14,
        color: '#333',
        lineHeight: 22,
    },
});
