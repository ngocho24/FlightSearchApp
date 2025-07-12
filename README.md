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
- Book a flight → shows confirmation and navigates to profile
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
  eas: {
    projectId: "6833684e-947f-4d76-a4a3-bfa691e071d6"
  }
}
```

4. **Start Expo**
```bash
npx expo start -c
```

---

## 🌍 Live demo
👉 [Open on Expo](https://expo.dev/accounts/elijahngocho/projects/FlightSearchApp/updates/59f94a82-dbec-4cee-83f7-50c1de50d2a9)

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
👉 [https://www.loom.com/share/2e85e176fa5c4b9d95d1788dac413d84?sid=1113887a-2a81-4156-a8b3-7ca570664ae7]
---

## ✏ Author
Made by Elijah  
For Spotter AI assessment