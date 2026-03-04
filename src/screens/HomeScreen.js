import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const INITIAL_MOCK_DATA = [
    { id: '1', title: 'Yeni Bilgi Paylaşımı Eklendi', date: '22.08.25 17:34', detail: 'Bugün su içmeyi unutmayın. Sağlıklı bir yaşam için günde en az 2 litre su tüketin.' },
    { id: '2', title: 'Yeni Öneri Eklendi', date: '09.08.25 09:05', detail: 'Günlük yürüyüş hedefinizi tamamlamak için akşam üstü 30 dakika yürüyüş yapabilirsiniz.' },
    { id: '3', title: 'Görüşlerinizi Puanlayalım', date: '26.07.25 09:34', detail: 'Uygulamamızı kullanma sürecini tamamlayan ve tamamlamak üzere olan hastalarımızdan ricamızdır...' },
];

export default function HomeScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Setup right header buttons
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={() => navigation.navigate('Add')} style={styles.iconButton}>
                        <Ionicons name="add" size={28} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="home" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        // Simulate API load
        const timer = setTimeout(() => {
            setData(INITIAL_MOCK_DATA);
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleDelete = (id) => {
        setData((prev) => prev.filter(item => item.id !== id));
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { item })}>
            <View style={styles.cardIcon}>
                <Ionicons name="notifications" size={24} color="#D84315" />
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.cardDate}>{item.date}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                <Ionicons name="trash" size={24} color="#E57373" />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#D84315" />
                <Text style={styles.loadingText}>Yükleniyor...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {data.length === 0 ? (
                <View style={styles.centerContainer}>
                    <Text style={styles.emptyText}>Hiç hatırlatmanız bulunmuyor.</Text>
                </View>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContainer}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    emptyText: {
        fontSize: 18,
        color: '#999',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginLeft: 15,
    },
    listContainer: {
        padding: 10,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 25, // very pill-like rounded corners seen in image
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    cardIcon: {
        marginRight: 10,
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        marginBottom: 4,
    },
    cardDate: {
        fontSize: 12,
        color: '#888',
    },
    deleteButton: {
        marginLeft: 10,
    },
});
