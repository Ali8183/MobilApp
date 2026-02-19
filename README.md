# Multipl Miyelom Mobil Uygulaması

Multipl Miyelom hastalarına yönelik kapsamlı sağlık takip ve bilgilendirme mobil uygulaması. React Native ve Expo ile geliştirilmiş modern bir sağlık platformudur.

## 📱 Özellikler

### Ana Modüller

- **👤 Profilim**: Kullanıcı profil yönetimi ve kişisel notlar
- **🔔 Hatırlatmalar**: Önemli bildirimler ve hatırlatıcılar
- **📚 Eğitimlerim**: Multipl Miyelom hakkında eğitici içerikler
  - İçindekiler
  - Multipl Miyelom Nedir?
  - Ağrı Yönetimi
  - Yorgunluk Yönetimi
- **📅 Günlüğüm**: Günlük sağlık durumu takibi ve ağrı değerlendirmesi
- **📢 Bilgi Paylaşımı**: Topluluk içinde bilgi ve deneyim paylaşımı
- **💡 Öneriler**: Sağlık profesyonellerinden öneriler ve beğeni sistemi
- **🥗 Beslenme & Egzersiz**: Sağlıklı yaşam ve beslenme takibi
- **⭐ Görüşlerim**: Uygulama değerlendirme ve geri bildirim sistemi

### Teknik Özellikler

- Kullanıcı girişi ve doğrulama
- Backend bağlantısı ile veri senkronizasyonu
- Etkileşimli kullanıcı arayüzü
- QR kod desteği
- MongoDB veritabanı entegrasyonu
- REST API

## 🛠️ Teknoloji Yığını

### Frontend

- **React Native**: 0.81.5
- **React**: 19.1.0
- **Expo**: ~54.0.33
- **React Navigation**: Native Stack Navigator
- **FontAwesome5**: İkon kütüphanesi
- **React Native Paper**: UI komponenti

### Backend

- **Node.js**
- **Express.js**: 4.18.2
- **MongoDB**: Mongoose 7.0.0
- **CORS**: Cross-origin desteği

## 📋 Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn
- Expo CLI
- MongoDB (lokal veya cloud)
- Android Studio / Xcode (emülatörler için)
- Expo Go uygulaması (fiziksel cihaz için)

## 🚀 Kurulum

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/Ali8183/MobilApp.git
cd MobilApp
```

### 2. Frontend Kurulumu

```bash
# Ana dizinde bağımlılıkları yükleyin
npm install

# veya
yarn install
```

### 3. Backend Kurulumu

```bash
# Backend dizinine gidin
cd backend

# Backend bağımlılıklarını yükleyin
npm install

# veya
yarn install
```

### 4. MongoDB Kurulumu

MongoDB'nin çalıştığından emin olun:

```bash
# MongoDB'yi başlatın (Windows)
net start MongoDB

# veya lokal MongoDB docker container
docker run -d -p 27017:27017 --name mongodb mongo
```

## ▶️ Uygulamayı Çalıştırma

### Backend Sunucusunu Başlatın

```bash
cd backend
npm start
```

Backend varsayılan olarak `http://localhost:5000` adresinde çalışacaktır.

### Frontend Uygulamasını Başlatın

Ana dizinde:

```bash
npm start

# veya belirli platform için
npm run android   # Android
npm run ios       # iOS
npm run web       # Web tarayıcı
```

### IP Adresini Yapılandırın

`App.js` dosyasında API_URL'yi kendi yerel IP adresinize göre güncelleyin:

```javascript
const API_URL = 'http://[SIZIN_IP_ADRESINIZ]:5000';
```

IP adresinizi öğrenmek için:

```bash
# Windows
ipconfig

# Mac/Linux
ifconfig
```

## 📁 Proje Yapısı

```
MobilApp/
├── App.js                 # Ana uygulama ve navigasyon
├── index.js              # Uygulama giriş noktası
├── app.json              # Expo yapılandırması
├── package.json          # Frontend bağımlılıkları
├── assets/               # Görseller ve statik dosyalar
├── components/           # React bileşenleri
│   └── AssetExample.js
└── backend/              # Backend sunucusu
    ├── server.js         # Express sunucu
    └── package.json      # Backend bağımlılıkları
```

## 🔌 API Endpoints

### Backend API

- **GET** `/` - Sunucu durumu kontrolü
- **POST** `/qr` - QR kod verisi gönderme

```javascript
// Örnek QR kod POST istegi
POST http://localhost:5000/qr
Content-Type: application/json

{
  "data": "QR_CODE_DATA"
}
```

## 📱 Kullanım

1. **Giriş Yapın**: Kullanıcı adı ve şifre ile giriş yapın
2. **Ana Menü**: 8 farklı modül arasından seçim yapın
3. **Profil**: Kişisel bilgilerinizi ve notlarınızı yönetin
4. **Eğitimler**: Sağlık konularında eğitim içeriklerini takip edin
5. **Günlük**: Her gün sağlık durumunuzu ve ağrı seviyenizi kaydedin
6. **Beslenme**: Günlük beslenme ve egzersiz alışkanlıklarınızı takip edin
7. **Değerlendirin**: Uygulamayı 5 yıldız sistemiyle değerlendirin

## 🎨 Tasarım

Uygulama modern ve kullanıcı dostu bir arayüz sunar:

- **Ana Renk**: #D3401B (Turuncu-Kırmızı)
- **İkincil Renk**: #6B2D5C (Mor)
- **Arka Plan**: #f8f9fa (Açık Gri)
- **Kart Gölgeleri**: Material Design prensipleri
- **İkonlar**: FontAwesome5

## 🔒 Güvenlik

- Backend CORS koruması aktif
- MongoDB bağlantı güvenliği
- Kullanıcı doğrulama sistemi
- Güvenli veri iletimi

## 🤝 Katkıda Bulunma

Projeye katkıda bulunmak için:

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/YeniOzellik`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje 0BSD lisansı altında lisanslanmıştır.

## 👥 Geliştirici

Ali8183 - [GitHub](https://github.com/Ali8183)

## 📞 İletişim

Herhangi bir sorunuz veya öneriniz için issue açabilirsiniz.

## 🙏 Teşekkürler

Bu uygulama Multipl Miyelom hastaları için geliştirilmiştir. Sağlık ve refahınız için tasarlanmış bu platformu kullanırken iyi dileklerimizle.
