// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCRmfI0ET6s8l3HLtUxNZ2jD-Q0u5Xlv0I",
  authDomain: "flowvibeflowvibe.firebaseapp.com",
  projectId: "flowvibeflowvibe",
  messagingSenderId: "162683611275",
  appId: "1:162683611275:web:e9d530b92ece7c46a88c8e"
});

const messaging = firebase.messaging();

self.addEventListener('push', function(event) {
  const payload = event.data.json();
  const title = payload.notification.title;
  const options = {
    body: payload.notification.body,
    icon: 'icon-192.png',
    badge: 'icon-192.png' // ✅ Chromeでアプリアイコンバッジに対応
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
