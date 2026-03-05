# HealthApp - Sağlık ve Hatırlatma Yönetimi 🩺📱

Bu proje, kullanıcının görsel panosunda yer alan sağlık ve yaşam yönetimi (hatırlatmalar, kullanıcı ekleme ve görüş bildirme) tasarımlarından ilham alarak **React Native + Expo** ile geliştirilmiştir.

## 🚀 Proje Hakkında

Öğretmenimizin yönergeleri doğrultusunda, verilen tasarımların "hissiyatını" (renk paleti, yuvarlatılmış köşeler, gölgelendirmeler, temiz arayüz) kaybetmeden 3 temel ekran olarak kurgulanmıştır:

1. **Hatırlatmalar (Liste Ekranı):** Mock data kullanılarak asenkron `Loading` yapısı (1.5 sn) simüle edilmiştir. Liste boş olduğunda `Empty State` mesajı görünür. Silme işlemi için lokal state (hızlı görünüm) kullanılmıştır.
2. **Hatırlatma Ekle (Form Ekranı):** Form doldurulurken `Validation` (girilmeyen alan var mı hata-kontrol mekanizması) yapılmıştır. "Gönder" ile başarılı bildirim dönüp listeye geri dönülür (`Navigation`).
3. **Detay Ekranı:** Listeden seçilen verinin, `route.params` aracılığıyla bir sonraki ekrana pass edilmesi ve gösterimi sağlanır.

## 🛠 Kullanılan Teknolojiler
- **React Native (Expo)**: Temel iskelet ve mobil framework.
- **React Navigation (@react-navigation/native-stack)**: Sayfalar arası geçiş ve Header yönetimi.
- **@expo/vector-icons (Ionicons)**: Uygulama içi ikonografi ("home", "add", "trash", vb.).
- **Yönetim:** useState ve useEffect (Component Mount ve Navigation Lifecycle işlemleri).

## 🗂 Proje Yapısı
```text
HealthApp/
├── App.js                     // Ana Navigation Controller
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js      // Kayıtlar ve Yükleme state'i
│   │   ├── AddScreen.js       // Validasyonlu Form
│   │   └── DetailScreen.js    // Veri gösterimi
└── README.md                  // Dokümantasyon
```

## 🧪 Değerlendirme Kriterlerine Özel Dokunuşlar
*   **Tasarım & UX:** Panoda görülen koyu turuncu (#D84315) Header rengi, beyaz card yapıları, alt gölgeler ve yuvarlak köşeler (border-radius: 20-25) tüm ekranlarda standart olarak kodlandı. Navigasyon header'ına sağ ve üst butonlar eklendi.
*   **Teknik Uygulama:** `setTimeout` ile Hook yaşam döngüleri simüle edilerek loading bar gösterildi, null/empty state durumları yönetildi. Temiz bir `src/` klasör strüktürü oluşturuldu.
*   **Yaratıcılık:** Sadece bir liste yerine, uygulamanın amacını belli eden interaktif sağlık asistanı havası korundu. (Not: Dropdown gibi bileşenler mockup tarzında eklenip native komponent karmaşasından kaçınıldı).

## 🏃‍♂️ Çalıştırma Talimatları
Uygulamayı lokalde Expo GO ile test etmek için komut satırında şu adımları izleyin:
```bash
# Proje klasörüne gidin
cd HealthApp

# Gerekli kütüphaneleri yükleyin (Zaten yüklü)
npm install

# Expo sunucusunu başlatın
npx expo start
```
*Ekrandaki QR kodu iOS/Android cihazınızdaki Expo uygulamasından okutarak veya emülatör(a veya i tuşu) kullanarak test edebilirsiniz.*
