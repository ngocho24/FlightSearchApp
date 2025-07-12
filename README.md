# ✈️ FlightSearchApp

A React Native (Expo) mobile app to search flights, view details, and book — built for the Spotter AI assessment.

✅ Built with:
- React Native + Expo
- Firebase Authentication
- Local mocked flight data (no paid API required)
- React Navigation & react-native-elements

---

## ⚙ Features
- Sign up & login with Firebase
- Search flights by route and date
- View flight details before booking
- Book a flight → shows confirmation
- Profile screen shows your last booked flight

---

## 🚀 How to run locally

1. **Clone the repo**
```bash
git clone https://github.com/ngocho24/FlightSearchApp.git
cd FlightSearchApp
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Firebase config**  
In `app.config.js` → fill the `extra` section with your Firebase keys:
```js
extra: {
  FIREBASE_API_KEY: "...",
  FIREBASE_AUTH_DOMAIN: "...",
  FIREBASE_PROJECT_ID: "...",
  FIREBASE_STORAGE_BUCKET: "...",
  FIREBASE_MESSAGING_SENDER_ID: "...",
  FIREBASE_APP_ID: "...",
}
```

4. **Start Expo**
```bash
npx expo start -c
```

---

## 🧪 API note
For demo, the app uses mocked flight data (`src/services/mockFlights.ts`)  
To use the real RapidAPI:
- Swap the import in `FlightsScreen.tsx`:
```ts
// import { searchFlights } from '../services/skyScrapper';
import { searchFlights } from '../services/mockFlights';
```

---

## 📹 Loom demo
Watch the demo video:  
👉 [Add Loom link here when you record](https://loom.com/)

---

## ✏ Author
Made by Elijah  
For Spotter AI assessment
