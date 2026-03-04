import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddScreen({ navigation }) {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');

    // Setup right header buttons
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconButton}>
                        <Ionicons name="home" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

    const handleSave = () => {
        if (!title.trim() || !detail.trim()) {
            Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
            return;
        }
        // Simple state flow, we just go back representing success
        Alert.alert('Başarılı', 'Hatırlatma başarıyla eklendi!', [
            { text: 'Tamam', onPress: () => navigation.goBack() }
        ]);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.formContainer}>
                <Text style={styles.label}>Hatırlatma Başlığı</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Başlık giriniz..."
                    value={title}
                    onChangeText={setTitle}
                />

                <Text style={styles.label}>Hatırlatma Detayı</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Detay giriniz..."
                    value={detail}
                    onChangeText={setDetail}
                    multiline
                    textAlignVertical="top"
                />

                <Text style={styles.label}>İlgili Modül</Text>
                <View style={styles.fakeDropdown}>
                    <Text style={styles.dropdownText}>Modül Seçiniz</Text>
                    <Ionicons name="chevron-down" size={20} color="#777" />
                </View>

                <Text style={styles.noteText}>
                    Not: Kullanıcı gönderdiğiniz hatırlatmaya tıkladığında seçtiğiniz Modüle yönlendirilecek.
                </Text>

                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>GÖNDER</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    headerRight: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 15,
    },
    formContainer: {
        padding: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
        marginTop: 15,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
    },
    textArea: {
        height: 100,
    },
    fakeDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 12,
    },
    dropdownText: {
        fontSize: 16,
        color: '#333',
    },
    noteText: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#666',
        marginTop: 10,
        marginBottom: 25,
    },
    button: {
        backgroundColor: '#D84315',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
