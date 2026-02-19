import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, ActivityIndicator, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5 } from '@expo/vector-icons';

// ==========================================
// BACKEND API AYARLARI
// ==========================================
const API_URL = 'http://10.28.60.89:5000';

// ==========================================
// 1. EKRAN: GİRİŞ SAYFASI (Doğrulama Eklendi)
// ==========================================
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username === '' || password === '') {
      Alert.alert("Hata", "Lütfen kullanıcı adı ve şifre giriniz.");
    } else {
      try {
        // Backend'e test isteği gönder
        const response = await fetch(`${API_URL}/`, {
          method: 'GET',
        });
        const data = await response.text();
        console.log('Backend Yanıt:', data);
        Alert.alert("Başarılı", "Backend'e bağlantı kuruldu!\n" + data);
        navigation.navigate('Home');
      } catch (error) {
        Alert.alert("Bağlantı Hatası", "Backend'e erişilemedi:\n" + error.message);
        console.log('Hata:', error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHalf}>
        <FontAwesome5 name="university" size={60} color="white" />
        <Text style={styles.headerTitle}>MOBİL UYGULAMASI</Text>
      </View>
      <View style={styles.bottomHalf}>
        <FontAwesome5 name="user-circle" size={80} color="#6B2D5C" style={{ marginTop: -40, marginBottom: 30 }} />
        <View style={styles.inputContainer}>
          <FontAwesome5 name="user" size={20} color="gray" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Kullanıcı Adı" value={username} onChangeText={setUsername} />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="lock" size={20} color="gray" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Şifre" secureTextEntry value={password} onChangeText={setPassword} />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>KULLANICI GİRİŞİ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// ==========================================
// 2. EKRAN: ANA MENÜ
// ==========================================
const menuItems = [
  { id: '1', title: 'PROFİLİM', icon: 'user', screen: 'Profil' },
  { id: '2', title: 'HATIRLATMALAR', icon: 'bell', screen: 'Hatirlatmalar' },
  { id: '3', title: 'EĞİTİMLERİM', icon: 'file-alt', screen: 'Egitimlerim' },
  { id: '4', title: 'GÜNLÜĞÜM', icon: 'calendar-alt', screen: 'Gunlugum' },
  { id: '5', title: 'BİLGİ PAYLAŞIMI', icon: 'share-alt', screen: 'BilgiPaylasimi' },
  { id: '6', title: 'ÖNERİLER', icon: 'hands-helping', screen: 'Oneriler' },
  { id: '7', title: 'BESLENME & EGZERSİZ', icon: 'running', screen: 'Beslenme' },
  { id: '8', title: 'GÖRÜŞLERİM', icon: 'comments', screen: 'Goruslerim' },
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(item.screen)}>
      <FontAwesome5 name={item.icon} size={30} color="#D3401B" style={styles.menuIcon} />
      <Text style={styles.menuText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeHeader}>
        <FontAwesome5 name="university" size={30} color="white" />
        <Text style={styles.homeHeaderText}>MULTİPL MİYELOM MOBİL UYGULAMASI</Text>
      </View>
      <FlatList data={menuItems} renderItem={renderItem} keyExtractor={item => item.id} numColumns={2} contentContainerStyle={styles.menuGrid} />
    </View>
  );
};

// ==========================================
// ALT SAYFALAR (Etkileşim Eklendi)
// ==========================================

// 1. Profil Sayfası (Kayıt State'i)
const ProfilScreen = () => {
  const [note, setNote] = useState('');
  const handleSave = () => {
    Alert.alert("Başarılı", "Notunuz profilinize kaydedildi!");
    setNote('');
  };
  return (
    <ScrollView style={styles.pageContainer}>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <FontAwesome5 name="user-circle" size={100} color="#6B2D5C" />
        <TouchableOpacity style={styles.orangeButton} onPress={() => Alert.alert("Bilgi", "Resim değiştirme modülü açılıyor...")}><Text style={styles.whiteText}>RESMİ DEĞİŞTİR</Text></TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={{fontWeight: 'bold', marginBottom: 10}}>Kendinle İlgili Bir Şeyler Yaz</Text>
        <TextInput 
          style={{borderWidth: 1, borderColor: '#ccc', height: 80, borderRadius: 5, padding: 10, textAlignVertical: 'top'}} 
          multiline={true} 
          value={note}
          onChangeText={setNote}
          placeholder="Buraya yazabilirsiniz..."
        />
        <TouchableOpacity style={[styles.orangeButton, {alignSelf: 'flex-end', marginTop: 10}]} onPress={handleSave}><Text style={styles.whiteText}>KAYDET</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// 2. Hatırlatmalar Sayfası (Silme Etkileşimi Eklendi)
const HatirlatmalarScreen = () => {
  const [data, setData] = useState([
    { id: '1', title: 'Yeni Öneri Eklendi', date: '09.08.25 09:09' },
    { id: '2', title: 'Görüşlerimi puanlayalım', date: '26.07.25 09:34' },
    { id: '3', title: 'Yeni Bilgi Paylaşımı Eklendi', date: '25.07.25 22:44' },
  ]);

  const handleDelete = (id) => {
    Alert.alert("Sil", "Bu hatırlatmayı silmek istediğinize emin misiniz?", [
      { text: "İptal", style: "cancel" },
      { text: "Sil", onPress: () => setData(data.filter(item => item.id !== id)) }
    ]);
  };

  return (
    <View style={styles.pageContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <FontAwesome5 name="bell" size={24} color="#D3401B" style={{marginRight: 15}} />
            <View style={{flex: 1}}>
              <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
              <Text style={{fontSize: 12, color: 'gray'}}>{item.date}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <FontAwesome5 name="trash-alt" size={20} color="#D3401B" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

// 3. Eğitimlerim Sayfası (Tıklanabilir Liste)
const EgitimlerimScreen = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => { setLoading(false); }, 1000); }, []);
  const mockEgitimler = [
    { id: '1', title: 'İçindekiler', done: true },
    { id: '2', title: 'Multipl Miyelom Nedir?', done: true },
    { id: '3', title: 'Ağrı yönetimi-1', done: true },
    { id: '4', title: 'Yorgunluk yönetimi-1', done: false },
  ];
  if (loading) return <View style={styles.center}><ActivityIndicator size="large" color="#D3401B" /></View>;
  return (
    <View style={styles.pageContainer}>
      <FlatList
        data={mockEgitimler}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.listItem} onPress={() => Alert.alert("Eğitim", `${item.title} eğitimi açılıyor...`)}>
            <FontAwesome5 name="file-alt" size={24} color="#666" style={{marginRight: 15}} />
            <Text style={{flex: 1, fontWeight: 'bold'}}>{item.title}</Text>
            <FontAwesome5 name={item.done ? "check-circle" : "chevron-right"} size={20} color={item.done ? "#D3401B" : "#ccc"} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// 4. Günlüğüm Sayfası
const GunlugumScreen = () => (
  <View style={styles.pageContainer}>
    <View style={styles.card}>
      <Text style={{marginBottom: 30}}>Yaşadığınız ağrı için 0-10 puan arasında değerlendirme yapınız.</Text>
      <View style={{height: 4, backgroundColor: '#f0b0a1', width: '100%', marginBottom: 30}}>
        <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: '#D3401B', marginTop: -8}} />
      </View>
      <TouchableOpacity style={[styles.orangeButton, {alignSelf: 'center'}]} onPress={() => Alert.alert("Kayıt", "Değerlendirme kaydedildi, sonraki soruya geçiliyor.")}><Text style={styles.whiteText}>SONRAKİ SORU</Text></TouchableOpacity>
    </View>
  </View>
);

// 5. Bilgi Paylaşımı
const BilgiPaylasimiScreen = () => (
  <View style={styles.pageContainer}>
    <TouchableOpacity style={styles.listItem} onPress={() => Alert.alert("Gönderi", "Yaz ayları ve yüzme konusu açılıyor...")}>
      <FontAwesome5 name="share-alt" size={20} color="black" style={{marginRight: 10}} />
      <View style={{flex: 1}}>
        <Text style={{fontWeight: 'bold', color: '#D3401B'}}>Yaz ayları ve yüzme</Text>
        <Text style={{fontSize: 12}}>admin</Text>
      </View>
      <Text style={{fontSize: 12, color: 'gray'}}>9 beğeni</Text>
      <FontAwesome5 name="chevron-right" size={16} color="#D3401B" style={{marginLeft: 10}} />
    </TouchableOpacity>
  </View>
);

// 6. Öneriler Sayfası
const OnerilerScreen = () => (
  <ScrollView style={styles.pageContainer}>
    <View style={[styles.card, {backgroundColor: '#e9ecef'}]}>
      <Text style={{fontWeight: 'bold', color: '#666', marginBottom: 5}}>admin</Text>
      <Text>Hafta sonuna nefes egzersizleri ile başlayalım mı? Her gün düzenli nefes egzersizleri yapmak akciğer kapasitenizi artırır.</Text>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
        <TouchableOpacity onPress={() => Alert.alert("Beğendin", "Bu öneriyi beğendiniz.")}><FontAwesome5 name="thumbs-up" size={20} color="green" style={{marginRight: 15}} /></TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Beğenmedin", "Bu öneriyi beğenmediniz.")}><FontAwesome5 name="thumbs-down" size={20} color="red" /></TouchableOpacity>
      </View>
    </View>
  </ScrollView>
);

// 7. Beslenme ve Egzersiz
const BeslenmeScreen = () => {
  const [sebze, setSebze] = useState('');
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <Text style={{marginBottom: 20}}>1. Bugün öğünlerinizde tükettiğiniz toplam sebze miktarını yemek kaşığı cinsinden belirtiniz.</Text>
        <TextInput value={sebze} onChangeText={setSebze} style={{borderBottomWidth: 1, borderBottomColor: '#D3401B', marginBottom: 30, textAlign: 'center'}} placeholder="Tüketilen sebze kaşık miktarı" keyboardType="numeric" />
        <TouchableOpacity style={[styles.orangeButton, {alignSelf: 'center'}]} onPress={() => Alert.alert("Kayıt", `${sebze} kaşık sebze kaydedildi.`)}><Text style={styles.whiteText}>SONRAKİ SORU</Text></TouchableOpacity>
      </View>
    </View>
  );
};

// 8. Görüşlerim (Yıldızlı Puanlama Eklendi)
const GoruslerimScreen = () => {
  const [rating, setRating] = useState(0);

  const handleSave = () => {
    if (rating === 0) {
      Alert.alert("Hata", "Lütfen bir yıldız seçiniz.");
    } else {
      Alert.alert("Teşekkürler", `Uygulamamıza ${rating} yıldız verdiniz.`);
      setRating(0);
    }
  };

  return (
    <View style={styles.center}>
      <Text style={{fontSize: 18, marginBottom: 20}}>Bizi değerlendirin.</Text>
      <View style={{flexDirection: 'row', marginBottom: 30}}>
        {[1, 2, 3, 4, 5].map((i) => (
          <TouchableOpacity key={i} onPress={() => setRating(i)}>
            <FontAwesome5 name="star" size={40} color={i <= rating ? "#ffc107" : "gray"} style={{marginHorizontal: 5}} solid={i <= rating} />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.orangeButton} onPress={handleSave}><Text style={styles.whiteText}>KAYDET</Text></TouchableOpacity>
    </View>
  );
};

// ==========================================
// YÖNLENDİRME (NAVİGASYON) AYARLARI
// ==========================================
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{ headerTintColor: '#fff', headerStyle: { backgroundColor: '#D3401B' } }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        
        <Stack.Screen name="Profil" component={ProfilScreen} options={{ title: 'Profil' }} />
        <Stack.Screen name="Hatirlatmalar" component={HatirlatmalarScreen} options={{ title: 'Hatırlatmalar' }} />
        <Stack.Screen name="Egitimlerim" component={EgitimlerimScreen} options={{ title: 'Eğitimlerim' }} />
        <Stack.Screen name="Gunlugum" component={GunlugumScreen} options={{ title: 'Günlüğüm' }} />
        <Stack.Screen name="BilgiPaylasimi" component={BilgiPaylasimiScreen} options={{ title: 'Bilgi Paylaşımı' }} />
        <Stack.Screen name="Oneriler" component={OnerilerScreen} options={{ title: 'Öneriler' }} />
        <Stack.Screen name="Beslenme" component={BeslenmeScreen} options={{ title: 'Sağlıklı Yaşam ve Egzersiz' }} />
        <Stack.Screen name="Goruslerim" component={GoruslerimScreen} options={{ title: 'Görüşlerim' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ==========================================
// BÜTÜN TASARIM KODLARI
// ==========================================
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topHalf: { flex: 0.4, backgroundColor: '#D3401B', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 15, textAlign: 'center' },
  bottomHalf: { flex: 0.6, alignItems: 'center', paddingHorizontal: 40 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 25, width: '100%', paddingBottom: 5 },
  icon: { width: 30, textAlign: 'center' },
  input: { flex: 1, height: 40, fontSize: 16 },
  loginButton: { backgroundColor: '#D3401B', paddingVertical: 12, paddingHorizontal: 40, borderRadius: 25, marginTop: 20 },
  loginButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  
  homeContainer: { flex: 1, backgroundColor: '#f8f9fa' },
  homeHeader: { backgroundColor: '#D3401B', paddingVertical: 30, paddingHorizontal: 10, alignItems: 'center', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  homeHeaderText: { color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 10, textAlign: 'center' },
  menuGrid: { padding: 10, alignItems: 'center', marginTop: 10 },
  menuItem: { width: '45%', backgroundColor: '#fff', padding: 20, margin: 8, borderRadius: 15, alignItems: 'center', elevation: 3, shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.1, shadowRadius: 3 },
  menuIcon: { marginBottom: 10 },
  menuText: { fontSize: 12, fontWeight: 'bold', color: '#555', textAlign: 'center' },

  pageContainer: { flex: 1, backgroundColor: '#f8f9fa', padding: 15 },
  center: { flex: 1, backgroundColor: '#f8f9fa', justifyContent: 'center', alignItems: 'center' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginTop: 15, elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3 },
  listItem: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 10, alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 2 },
  
  orangeButton: { backgroundColor: '#D3401B', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginTop: 10 },
  whiteText: { color: '#fff', fontWeight: 'bold' }
});